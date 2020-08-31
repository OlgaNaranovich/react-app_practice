import React from 'react';
import {ErrorMessage, Label, SubmitButton} from './FormElements.styled';
import FormInput from './FormInput';

const FormComponent = ({formContent, buttonText, submitForm, changeInput, formValue}) => {

  return (
    <form onSubmit={submitForm}>
      {formContent.map((field, index) => (
        <Label key={index}>{field.label}
          <FormInput
            type={field.type}
            name={field.name}
            value={formValue[field.name].value}
            placeholder={field.placeholder}
            isError={formValue[field.name].error}
            onChange={changeInput}
          />
          <ErrorMessage>{formValue[field.name].error}</ErrorMessage>
        </Label>
      ))}
      <SubmitButton>{buttonText}</SubmitButton>
    </form>
  )
}

export default FormComponent;