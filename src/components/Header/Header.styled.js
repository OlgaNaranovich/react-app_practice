import styled from 'styled-components';
import {IconWrapper} from '../DnD/Droppable/Droppable.styled';

export const HeaderWrapper = styled.header`
  height: 90px;
  margin-bottom: 10px;
  padding: 20px 0;
  border-bottom: 1px solid #717171;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav``;

export const NavList = styled.nav``;

export const NavItem = styled.nav`
  display: inline-block;
  margin-right: 20px;
  
  a, a:hover {
    color: ${({textColor}) => textColor ? 'green' :  '#212529'};
  }
`;

export const Login = styled.h4`
  color: green;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const UserInfo = styled.div`
  position: relative;
`;

export const UserIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  background: green;
  font-family: 'Roboto', sans-serif;
`;

export const UserIconWrapper = styled(IconWrapper)`
    left: -35px;
    top: 0;
    position: absolute;
    color: green;
`;

export const UserProfileList = styled.ul`
  position: absolute;
  right: 0;
  min-width: 120px;
  width: max-content;
  background: white;
  border: 1px solid #171717;
  border-radius: 3px;
  padding: 10px;
  margin: 10px 0;
`;

export const UserProfileItem = styled.li`
   cursor: pointer;
   margin-bottom: 10px;
`;