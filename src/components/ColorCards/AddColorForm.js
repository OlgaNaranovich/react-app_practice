import React, {useState} from 'react';
import { AddColorForm, AddColorButton } from './ColorCards.styled';
import {Input, Fieldset, ErrorMessage} from '../../UI/FormElements.styled';
import {validation} from '../../helpers/formAddColorValidation';

const addColorInitialForm = [
  {
    name: 'colorName',
    inputName: 'title',
    type: 'text',
    legend: 'Color name:',
    placeholder: 'Type color name ',
    errorMessage: 'Type color name'
  },
  {
    name: 'colorIndex',
    inputName: 'color',
    type: 'text',
    legend: 'Color index:',
    placeholder: 'f.e. #4258ea ',
    errorMessage: 'Type color index in format "#4258ea"'
  }
]

let initialValue = addColorInitialForm.reduce((a, {inputName}) => {
  a[inputName] = {value: '', error: ''};
  return a;
}, {});

const errorMessages = addColorInitialForm.reduce((a, {inputName, errorMessage}) => {
  a[inputName] = errorMessage;
  return a;
}, {});

const AddColor = ({ addNewColor }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const onChangeValidation = (inputName, value) => {
    let formInputData = validation(inputName, value) ?
      {value: value, error: ''} :
      {value: value, error: errorMessages[inputName]};
    return {
      ...inputValue,
      [inputName]: formInputData
    };
  }
  
  const changeInput = (e) => {
    let target = e.target;
    const validData = onChangeValidation(target.name, target.value);
    setInputValue(validData);
  }

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const formData = new FormData(e.target);
    const formValid = {...inputValue};

    console.log(errorMessages);
    console.log(formValid);
    for (let key in formValid) {
      console.log('submit', key, formValid[key].value);
      formValid[key].value = formData.get(key);
      formValid[key].error = validation(key, formValid[key].value) ? '' : errorMessages[key];
      // validation(key, formValid[key]);
    }
    
    setInputValue(formValid);
    // if (inputValue.title.value && inputValue.color.value) {
    //   addNewColor(formValid);
    //   setInputValue(initialValue);
    //   setIsSubmit(false);
    // }
  }

  return (
    <AddColorForm onSubmit={submitForm}>
      <h4>Add color</h4>
      {addColorInitialForm.map((field, i) => (
        <Fieldset key={i} name={field.name}>
          <legend>{field.legend}</legend>
          <Input
            type={field.type}
            placeholder={field.placeholder}
            name={field.inputName}
            value={inputValue[field.inputName].value}
            onChange={changeInput} />
          {isSubmit && !inputValue[field.inputName].value && <ErrorMessage>{field.errorMessage}</ErrorMessage>}
        </Fieldset>
        ))}
      <AddColorButton activeColor={'#50a0a5'}>Save color</AddColorButton>
    </AddColorForm>
  )
}

export default AddColor;