import React from 'react';
import LoginForm from 'components/LoginForm';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/contactSelectors';
import { Navigate } from 'react-router-dom';
import { Title, ContainerBody } from 'components/App/App.styled';

const Login = () => {
  // RTK Query (Отримання "токену")
  const { token } = useSelector(getUser);

  return (
    <>
      <ContainerBody>
        <Title>Login</Title>
        {token ? <Navigate to="/userMenu" replace /> : <LoginForm />}
      </ContainerBody>
    </>
  );
};

export default Login;
