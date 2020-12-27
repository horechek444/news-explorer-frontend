import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeRegister.css';
import {Link} from 'react-router-dom';

const PopupTypeRegister = () => {
  return (
    <Popup>
      <h2 className="popup__title">Регистрация</h2>
      <form className="popup__form form_type_register" action="#" name="register" noValidate>
        <div className="popup__cover">
          <label className="popup__control">Email
            <input className="popup__input popup__input_type_email" type="email" name="email"
                   placeholder="Введите почту" required/>
            <span className="popup__error popup__error_type_active">Неправильно</span>
          </label>
          <label className="popup__control">Пароль
            <input className="popup__input popup__input_type_password" type="password" name="password"
                   placeholder="Введите пароль" required/>
            <span className="popup__error popup__error_type_active">Неправильно</span>
          </label>
          <label className="popup__control">Имя
            <input
              className="popup__input popup__input_type_name" type="text" name="name" placeholder="Введите своё имя"
              minLength="2" maxLength="30" required/>
            <span className="popup__error popup__error_type_active popup__error_type_active">Неправильно</span>
          </label>
        </div>
        <div className="popup__error-cover">
          <span className="popup__error popup__error_type_total">Совсем неправильно</span>
          <input className="popup__submit popup__submit_type_disabled" type="submit" value="Зарегистрироваться" name="submit"/>
        </div>
      </form>
      <span className="popup__redirection">или
        <Link className="popup__redirection-link" to="">&nbsp;Войти</Link>
      </span>
    </Popup>
  )
}

export default PopupTypeRegister;