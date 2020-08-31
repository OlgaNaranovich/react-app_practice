import styled from 'styled-components';
import {TitleWrapper} from '../../../components/DnD/Droppable/Droppable.styled';

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const ProjectsWrapper = styled.div`
  margin: 16px;
  border: 1px solid #696d76;
  position: relative;
  overflow: hidden;
`;

export const ProjectsContent = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 200px);
`;

export const Item = styled.div`
  width: 250px;
  min-height: 80px;
  background-color: #ffffff;
  padding: 16px;
  margin: 10px auto;
  border: 1px solid #bbbbbb;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  box-shadow: 0 2px 3px #696d76;
`;

export const ProjectTitleWrapper = styled(TitleWrapper)`
  position: sticky;
  top: 0;
`;
