import React from "react";
import './CardButton.css';
import {useLocation} from 'react-router-dom';

const CardButton = ({loggedIn, onRegisterPopupOpen}) => {
  const location = useLocation();

  const handleMessageShow = () => {
    if (location.pathname === '/' && !loggedIn) {
      return "card-button__message";
    } else if (location.pathname === '/' && loggedIn) {
      return "card-button__message card-button__message_disabled";
    } else if (location.pathname !== '/') {
      return "card-button__message card-button__message_type_saved-news";
    }
  }

  return (
    <>
      <button
        className={location.pathname === '/' ? "button card-button" : "button card-button card-button_type_saved-news"}
        // onClick={!loggedIn ? onRegisterPopupOpen : сохранение} todo
      />
      <span
        className={handleMessageShow()}>{location.pathname === '/' ? "Войдите, чтобы сохранять статьи" : "Убрать из сохранённых"}</span>
    </>
  )
}

export default CardButton;