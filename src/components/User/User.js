import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {UserIcon, UserIconWrapper, UserInfo, UserProfileItem, UserProfileList} from '../Header/Header.styled';

const User = ({ userAbbr, resetUserData }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserProfile = () => {
    setUserMenuOpen(!isUserMenuOpen);
  }

  const userLogOut = () => {
    resetUserData();
  }

  return (
    <UserInfo>
      <UserIcon onClick={toggleUserProfile}>
        <span>{userAbbr}</span>
        <UserIconWrapper><FontAwesomeIcon icon={isUserMenuOpen ? faAngleUp : faAngleDown} /></UserIconWrapper>
      </UserIcon>
      {isUserMenuOpen &&
      <UserProfileList>
        <UserProfileItem>User Profile</UserProfileItem>
        <UserProfileItem onClick={userLogOut}>Log out</UserProfileItem>
      </UserProfileList>
      }
    </UserInfo>
  )
}


export default User;