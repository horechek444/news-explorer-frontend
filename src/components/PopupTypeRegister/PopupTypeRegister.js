import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeRegister.css';
import PopupForm from "../PopupForm/PopupForm";
import PopupInput from "../PopupInput/PopupInput";
import useValidation from "../../hooks/useValidation";

const PopupTypeRegister = ({isOpen, onClose, onLoginPopupOpen, loading, serverError, onRegister}) => {
  const fields = ['email', 'password', 'name'];

  const {
    isValid, setIsValid,
    inputValue, setInputValue,
    validationMessage, setValidationMessage,
    handleInputChange, fieldsEnumeration
  } = useValidation(fields);

  React.useEffect(() => {
    setInputValue(fieldsEnumeration(''));
    setIsValid(fieldsEnumeration(false));
    setValidationMessage(fieldsEnumeration(''));
  }, [isOpen, setInputValue, setIsValid, setValidationMessage]);

  const handleRegisterSubmit = ({email, password, name}) => {
    if (!email || !password || !name) {
      return;
    }
    onRegister(email, password, name);
    onClose();
  }

  return (
    <Popup name="register" title="Регистрация" isOpen={isOpen} onClose={onClose} onLoginPopupOpen={onLoginPopupOpen}>
      <PopupForm name="register" submit={loading ? "Регистрация..." : "Зарегистрироваться"}
                 serverError={serverError} onSubmit={handleRegisterSubmit}
                 isValidAll={isValid.email && isValid.password && isValid.name}>
        <PopupInput control="Email" name="email"
                    type="email" placeholder="Введите почту"
                    required={true} value={inputValue.email}
                    onChange={handleInputChange} isValid={isValid.email}
                    validationMessage={validationMessage.email}/>
        <PopupInput control="Пароль" name="password"
                    type="password" placeholder="Введите пароль"
                    required={true} value={inputValue.password}
                    onChange={handleInputChange} isValid={isValid.password}
                    validationMessage={validationMessage.password}/>
        <PopupInput control="Имя" name="name"
                    type="text" placeholder="Введите своё имя"
                    minLength="2" maxLength="30" required={true}
                    value={inputValue.name}
                    onChange={handleInputChange} isValid={isValid.name}
                    validationMessage={validationMessage.name}/>
      </PopupForm>
    </Popup>
  )
}

export default PopupTypeRegister;