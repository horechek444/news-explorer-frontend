import React from "react";
import './PopupForm.css';
import PopupError from "../PopupError/PopupError";

const PopupForm = ({name, children, submit}) => {
  return (
    <form className={`popup__form form_type_${name}`} action="#" name={name} noValidate>
      <div className="popup__cover">
        {children}
      </div>
      <div className="popup__submit-cover">
        <PopupError server={true}/>
        <input className="popup__submit popup__submit_type_disabled" type="submit" value={submit} name="submit"/>
      </div>
    </form>
  )
}

export default PopupForm;