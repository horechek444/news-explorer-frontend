import React from "react";
import PopupInput from "../PopupInput/PopupInput";
import PopupForm from "../PopupForm/PopupForm";
import useValidation from "../../hooks/useValidation";

const Login = ({isOpen, loading, serverError, onLogin}) => {
  const fields = ['email', 'password'];

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

  const handleLoginSubmit = ({email, password}) => {
    if (!email || !password){
      return;
    }
    onLogin(email, password);
  }

  return (
    <PopupForm name="login" submit={loading ? "Выполняется вход..." : "Войти"}
               serverError={serverError} onSubmit={onSubmit}
               isValidAll={isValid.email && isValid.password}>
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
    </PopupForm>
  );
}

export default Login;