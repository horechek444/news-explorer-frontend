import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeLogin.css';
import PopupForm from "../PopupForm/PopupForm";
import PopupInput from "../PopupInput/PopupInput";

const PopupTypeLogin = () => {
  return (
    <Popup name="login" title="Вход">
      <PopupForm name="login" submit="Войти">
        <PopupInput control="Email" name="email" type="email" placeholder="Введите почту"/>
        <PopupInput control="Пароль" name="password" type="password" placeholder="Введите пароль"/>
      </PopupForm>
    </Popup>
  )
}

export default PopupTypeLogin;