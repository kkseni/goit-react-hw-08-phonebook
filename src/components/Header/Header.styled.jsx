import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;

  padding: 20px;
  padding-bottom: 20px;
  background-image: linear-gradient(90deg, #0f0c29, #302b63, #24243e);

  height: 90px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
font-family: 'Roboto';
  font-weight: 500;
  font-size: 34px;
  line-height: 1.33;
  min-width: 120px;
  min-height: 44px;

  margin-right: 30px;

  color: grey;
  background-color: transparent;
  border-color: #ffffff;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background: #6bdddd;
    box-shadow: 0px 8px 43px rgba(97, 219, 246, 0.6);
    border-radius: 5px;
    border: none;
    cursor: pointer;

    transform: translateY(5%) scale(1.1);
  }

  background: linear-gradient(transparent, grey);

  &.active {
    background-color: #6bdddd;
    color: aliceblue;
    
`;
