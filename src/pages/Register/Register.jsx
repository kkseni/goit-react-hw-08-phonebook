import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { Title, ContainerBody } from 'components/App/App.styled';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/contactSelectors';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const { token } = useSelector(getUser);

  return (
    <>
      <ContainerBody>
        <Title>Register</Title>
        {token ? <Navigate to="/userMenu" replace /> : <RegisterForm />}
      </ContainerBody>
    </>
  );
};

export default Register;
