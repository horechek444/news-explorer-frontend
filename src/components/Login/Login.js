import React from "react";
import './Login.css';
import {useLocation} from 'react-router-dom';

const Login = ({name, loggedIn}) => {
  const location = useLocation();

  const handleClassName = () => {
    if (loggedIn && location.pathname === '/') {
      return `button login-button login-button_active login-button_type_main-login`
    } else {
      return `button login-button login-button_type_main`
    }
  }

  return (
    <button
      className={location.pathname === '/saved-news' ? `button login-button login-button_active login-button_type_saved-news` : handleClassName()}>{loggedIn ? `${name}` : "Авторизоваться"}</button>
  )
}


export default Login;