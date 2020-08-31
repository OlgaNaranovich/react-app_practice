import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Form from '../../UI/Form';
import {isUserDataSaved, setUserData} from '../../store/userLogin/actions';
import {profileForm} from '../../store/userLogin/types';
import {validation} from '../../helpers/formLoginValidation';
import {errorMessages, initialUserState} from './Login.helper';
import {FormLoginWrapper} from './Login.styled';

const Login = ({ userState, setUserData, saveUserData }) => {
  const [formLoginValue, setFormLoginValue] = useState(initialUserState);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  let history = useHistory();

  const onChangeValidation = (inputName, inputValue) => {
    let formInputData = validation(inputName, inputValue) ?
      {value: inputValue, error: ''} :
      {value: inputValue, error: errorMessages[inputName]};
    return {
      ...formLoginValue,
      [inputName]: formInputData
    };
  }

  const onChangeInput = (e) => {
    let target = e.target;
    const validData = onChangeValidation(target.name, target.value);
    setFormLoginValue(validData);
    if (isFormSubmit) setUserData(validData);
  }

  const submitForm = (e) => {
    e.preventDefault();
    setIsFormSubmit(true);
    const formData = new FormData(e.target);
    let currentFormData = {...formLoginValue};

    for (let key in currentFormData) {
      currentFormData[key].value = formData.get(key);
      currentFormData[key].error = validation(key, currentFormData[key].value) ? '' : errorMessages[key];
      validation(key, currentFormData[key].value);
    }

    setUserData(currentFormData);
    const checkError = Object.values(currentFormData).filter(item => item.error);

    if (!checkError.length) {
      saveUserData();
      history.push('/');
    }
  }

  return (
    <React.Fragment>
      <FormLoginWrapper>
        <Form
          formContent={profileForm}
          buttonText={'Login'}
          changeInput={onChangeInput}
          submitForm={submitForm}
          formValue={userState} />
      </FormLoginWrapper>
    </React.Fragment>
  )
};

const mapStateToProps = state => ({
  userState: state.userLogin.userData
});

const mapDispatchToProps = dispatch => ({
  setUserData: bindActionCreators(setUserData, dispatch),
  saveUserData: bindActionCreators(isUserDataSaved, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);