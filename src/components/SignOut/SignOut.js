import React from "react";
import './SignOut.css';
import {useLocation} from 'react-router-dom';

const SignOut = ({name, loggedIn, onLoginPopupOpen, onClose, onSignOut}) => {
  const location = useLocation();

  const handleClassName = () => {
    if (location.pathname === '/saved-news') {
      return "button sign-out-button sign-out-button_active sign-out-button_type_saved-news";
    }
    else if (loggedIn && location.pathname === '/') {
      return "button sign-out-button sign-out-button_active sign-out-button_type_main"
    } else {
      return "button sign-out-button sign-out-button_type_main"
    }
  }

  const handleLogin = () => {
    if (loggedIn) {
      onClose();
      onSignOut();
    } else {
      onClose();
      onLoginPopupOpen();
    }
  }

  return (
    <button
      className={handleClassName()}
      onClick={handleLogin}>{loggedIn ? `${name}` : "Авторизоваться"}</button>
  )
}


export default SignOut;