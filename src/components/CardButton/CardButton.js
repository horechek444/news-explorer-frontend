import React from "react";
import './CardButton.css';
import {useLocation} from 'react-router-dom';

const CardButton = ({loggedIn, onRegisterPopupOpen, onArticleSave, onArticleDelete}) => {
  const location = useLocation();

  const handleMessageShow = () => {
    if (location.pathname === '/' && !loggedIn) {
      return "card-button__message";
    }
    else if (location.pathname === '/' && loggedIn) {
      return "card-button__message card-button__message_disabled";
    } else if (location.pathname === '/saved-news') {
      return "card-button__message card-button__message_type_saved-news";
    }
  }

  const handleClick = () => {
    if (location.pathname === '/' && !loggedIn) {
      return onRegisterPopupOpen;
    } else if (location.pathname === '/' && loggedIn) {
      return onArticleSave;
    } else if (location.pathname === '/saved-news') {
      return onArticleDelete;
    }
  }

  return (
    <>
      <button
        className={location.pathname === '/' ? "button card-button" : "button card-button card-button_type_saved-news"}
        onClick={handleClick()}
      />
      <span
        className={handleMessageShow()}>{location.pathname === '/' ? "Войдите, чтобы сохранять статьи" : "Убрать из сохранённых"}</span>
    </>
  )
}

export default CardButton;