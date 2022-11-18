import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  padding-bottom: 20px;
  height: 90px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
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

  &.active {
    background-color: #6bdddd;
    color: aliceblue;
    
`;
