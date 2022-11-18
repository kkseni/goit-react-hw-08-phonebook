import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/contactSelectors';
import { useLogOutAuthMutation } from 'redux/Query/UserApi';
import { ButtonExit } from './UserMenu.styled';

export const UserMenu = () => {
  // RTK Query вихід з логіну
  const [logout] = useLogOutAuthMutation();

  // Отримання Імені через Slice
  const { name } = useSelector(getUser);

  const handleLogoutClick = e => {
    logout();
  };

  return (
    <>
      <h2 style={{ color: 'red' }}>User: {name}</h2>;
      <ButtonExit type="button" onClick={handleLogoutClick}>
        Exit
      </ButtonExit>
      ;
    </>
  );
};

export default UserMenu;
