import React, { useEffect } from 'react'
import LoginPage from '../auth/login/LoginPage';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    if (user.token) {
      navigate('/')
    }
  },[user]);

  return <LoginPage />
}

export default AuthPage