import React, {useState, useRef} from 'react';
import { FormContainer, FormStandardField, FormInputField } from './FormElements.styled';

const FormInput = props => {
  const { type, name, placeholder, isError, onChange } = props;
  const [inputOnClick, setInputOnClick] = useState(false);
  const inputRef = useRef(null);

  const inputOnFocus = () => {
    setInputOnClick(true);
  }

  const handleToggle = () => {
    setInputOnClick(true);
  };

  return (
    <FormContainer onClick={handleToggle} isNotEmpty={inputOnClick} isError={isError}>
      <FormStandardField showPlaceholder={inputOnClick}>
        {placeholder}
      </FormStandardField>
      <FormInputField
        type={type}
        ref={inputRef}
        name={name}
        onChange={onChange}
        onFocus={inputOnFocus}
      />
    </FormContainer>
  );
};

export default FormInput;
