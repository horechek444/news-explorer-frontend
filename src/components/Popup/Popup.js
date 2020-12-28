import React from "react";
import './Popup.css';
import {Link} from "react-router-dom";

const Popup = ({name, isOpen, title, children}) => {
  return (
    <section
      // className={`${isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}`}
      className="popup popup_opened">
      <div className={name === "success" ? "popup__container popup__container_type_success" : "popup__container"}>
        <button className="popup__close" type="button"/>
        <h2 className={name === "success" ? "popup__title popup__title_type_success" : "popup__title"}>{title}</h2>
        {children}
        <span className={name === "success" ? "popup__redirection popup__redirection_type_success" : "popup__redirection"}>{name === "success" ? "" : "или "}
          <Link className="popup__redirection-link"
              to={name === "register" || name === "success" ? "/signin ": "/signup"}>{name === "register" || name === "success" ? "Войти" : "Зарегистрироваться"}</Link>
        </span>
      </div>
    </section>
  );
}

export default Popup;