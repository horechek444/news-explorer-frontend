import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeRegister.css';
import PopupForm from "../PopupForm/PopupForm";
import PopupInput from "../PopupInput/PopupInput";

const PopupTypeRegister = () => {
  return (
    <Popup name="register" title="Регистрация">
      <PopupForm name="register" submit="Зарегистрироваться">
        <PopupInput control="Email" name="email" type="email" placeholder="Введите почту"/>
        <PopupInput control="Пароль" name="password" type="password" placeholder="Введите пароль"/>
        <PopupInput control="Имя" name="name" type="text" placeholder="Введите своё имя" minLength="2" maxLength="30"/>
      </PopupForm>
    </Popup>
  )
}

export default PopupTypeRegister;