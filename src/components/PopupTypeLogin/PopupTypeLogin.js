import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeLogin.css';
import PopupForm from "../PopupForm/PopupForm";
import PopupInput from "../PopupInput/PopupInput";

const PopupTypeLogin = ({isOpen, onClose, onRegisterPopupOpen}) => {
  return (
    <Popup name="login" title="Вход" isOpen={isOpen} onClose={onClose} onRegisterPopupOpen={onRegisterPopupOpen}>
      <PopupForm name="login" submit="Войти">
        <PopupInput control="Email" name="email" type="email" placeholder="Введите почту"/>
        <PopupInput control="Пароль" name="password" type="password" placeholder="Введите пароль"/>
      </PopupForm>
    </Popup>
  )
}

export default PopupTypeLogin;