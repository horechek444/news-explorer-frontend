import React from "react";
import './Error.css';

const Error = ({server}) => {
  return (
    <span
      className={server ? "error error_type_server" : "error error_active"}>{server ? "Такой пользователь уже существует" : "Неправильно"}</span>
  )
}

export default Error;