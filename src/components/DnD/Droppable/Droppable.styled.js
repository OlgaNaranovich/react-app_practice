import styled from 'styled-components';

export const Droppable = styled.div`
  background-color: ${({isTeamCol}) => isTeamCol ? '#98bb73' : 'white'};
  width: 350px;
  min-height: ${({isTeamCol, isOpen}) => isTeamCol ? '400px;' : (isOpen ? '200px' : 'auto')};
  margin: 16px;
  border: 1px solid #696d76;
  box-shadow: ${({isTeamCol}) => isTeamCol ? 'none' : '0 3px 3px #d2d2d2'};
`;

export const TitleWrapper = styled.div`
  background-color: ${({headerColor}) => headerColor};
  padding: 10px 0;
  border-bottom: 1px solid gray;
  cursor: ${({isTeamCol}) => !isTeamCol ? 'pointer' : 'default'}
`;

export const IconWrapper = styled.span`
  margin: 8px;
`;