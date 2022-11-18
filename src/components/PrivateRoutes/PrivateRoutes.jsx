import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getUser } from 'redux/contactSelectors';

const PrivateRoutes = () => {
  // Перевірка на "Токен"
  const { token } = useSelector(getUser);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
