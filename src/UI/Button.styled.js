import styled from 'styled-components';

export const Button = styled.button`
  background: #272122;
  color: white;
  padding: 5px 20px;
  margin-right: 20px;
  border: 1px solid #383838;
  border-radius: 3px;
  transition: background 0.3s ease;
  
  &:hover, &:focus, &:active {
    outline: none;
    background: ${({disabled, activeColor}) => !disabled ? activeColor : 'gray'};
  }
  
  svg {
    margin-right: 10px;
  }
`;