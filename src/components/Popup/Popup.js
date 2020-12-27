import React from "react";
import './Popup.css';

const Popup = ({name, isOpen, children}) => {
  return (
    <section
      // className={`${isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}`}
    className="popup">
      <div className="popup__container">
        <button className="popup__close" type="button"/>
        {children}
      </div>
    </section>
  );
}

export default Popup;