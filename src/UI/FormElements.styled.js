import styled from 'styled-components';
import {Button} from './Button.styled';

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #333;
  display: block;
`;

export const Fieldset = styled.fieldset`
  margin: 10px 0;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin-bottom: 0;
`;

export const FormContainer = styled.div`
  position: relative;
  display: block;
  border: 1px solid ${({isError }) => isError ? 'red' : '#333'};
  border-radius: 4px;
  margin: 0;
  transition: all 0.2s ease;
  padding: 0 10px;
  background: white;

  &:hover, &:focus {
    border: 1px solid ${({isError }) => isError ? 'red' : 'green'};
    box-shadow: 0 0 3px #868686;
  }
`;

export const FormStandardField = styled.div`
  transform: translateY(-50%);
  color: gray;
  display: block;
  pointer-events: none;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 80px);
  text-align: left;
  top: ${({showPlaceholder}) => !showPlaceholder ? '47%': '6px'};
  font-size: ${({showPlaceholder}) => !showPlaceholder ? '1rem': '0.8rem'};
`;

export const FormInputField = styled.input`
  height: 56px;
  font-size: 1.25rem;
  z-index: 2;
  padding: 10px 0 0;
  color: #333;
  display: block;
  border: 0;
  margin: 0;
  background: transparent;
  outline: 0;
  outline-color: transparent;
  cursor: pointer;
  text-overflow: ellipsis;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: color 9999s ease-out, background-color 9999s ease-out;
  }
`;

export const SubmitButton = styled(Button)`
  margin: 20px 0;
`;