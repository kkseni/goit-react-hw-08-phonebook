import { NavBar, HeaderWrapper, NavLinkStyled } from './Header.styled';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/contactSelectors';

const Header = () => {
  // Перевірка на "Токен"
  const { token } = useSelector(getUser);

  return (
    <>
      <NavBar>
        <HeaderWrapper>
          {token ? (
            <>
              <NavLinkStyled to="/userMenu">UserMenu</NavLinkStyled>
              <NavLinkStyled to="/home">Add contact</NavLinkStyled>
              <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            </>
          ) : (
            <>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
              <NavLinkStyled to="/register">Register</NavLinkStyled>
            </>
          )}
        </HeaderWrapper>
      </NavBar>
    </>
  );
};

export default Header;
