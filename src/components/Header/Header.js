import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isUserDataReset} from '../../store/userLogin/actions';
import { Link } from 'react-router-dom';
import { navMenu } from '../../config/routeConfig';
import User from '../User/User';
import { HeaderWrapper, Nav, NavList, NavItem, Login } from './Header.styled';

const Header = ({ location, userState, userDataSaved, resetUserData }) => {

  const userAbbr = userState.userName.value[0];

  return (
    <HeaderWrapper>
      <Nav>
        <NavList>
          {navMenu.map((navItem, i) => (
            <NavItem textColor={location.pathname === navItem.linkPathname} key={i}>
              <Link to={navItem.linkPathname}>
                <h4>{navItem.title}</h4>
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
      {!userDataSaved ? <Link to={'/profile'}><Login>Login</Login></Link> : <User userAbbr={userAbbr} resetUserData={resetUserData} />}

    </HeaderWrapper>
  )
}

const mapStateToProps = state => ({
  userState: state.userLogin.userData,
  userDataSaved: state.userLogin.userDataSaved
});

const mapDispatchToProps = dispatch => ({
  resetUserData: bindActionCreators(isUserDataReset, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);