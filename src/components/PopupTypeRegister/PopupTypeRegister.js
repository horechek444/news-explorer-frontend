import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeRegister.css';
import PopupForm from "../PopupForm/PopupForm";
import PopupInput from "../PopupInput/PopupInput";

const PopupTypeRegister = ({isOpen, onClose, onLoginPopupOpen}) => {
  return (
    <Popup name="register" title="Регистрация" isOpen={isOpen} onClose={onClose} onLoginPopupOpen={onLoginPopupOpen}>
      <PopupForm name="register" submit="Зарегистрироваться">
        <PopupInput control="Email" name="email" type="email" placeholder="Введите почту" required={true}/>
        <PopupInput control="Пароль" name="password" type="password" placeholder="Введите пароль" required={true}/>
        <PopupInput control="Имя" name="name" type="text" placeholder="Введите своё имя" minLength="2" maxLength="30" required={true}/>
      </PopupForm>
    </Popup>
  )
}

export default PopupTypeRegister;