import React from "react";
import './CardButton.css';
import {useLocation} from 'react-router-dom';

const CardButton = ({loggedIn, onRegisterPopupOpen, onArticleSave, onArticleDelete, article}) => {
  const location = useLocation();

  const handleMessageShow = () => {
    if (location.pathname === '/' && !loggedIn) {
      return "card-button__message";
    } else if (location.pathname === '/' && loggedIn) {
      return "card-button__message card-button__message_disabled";
    } else if (location.pathname === '/saved-news') {
      return "card-button__message card-button__message_type_saved-news";
    }
  }

  const handleAction = () => {
    if (location.pathname === '/' && !loggedIn) {
      return onRegisterPopupOpen();
    } else if (location.pathname === '/' && loggedIn) {
      return onArticleSave(article);
    } else if ((location.pathname === '/saved-news') || (loggedIn && article.saved)) {
      return onArticleDelete(article);
    }
  }

  const handleClassName = () => {
     if (location.pathname === '/' && loggedIn && article.saved) {
      return "button card-button card-button_clicked";
    } else if (location.pathname === '/') {
      return "button card-button";
    } else if (location.pathname !== '/') {
      return "button card-button card-button_type_saved-news";
    }
  }

  return (
    <>
      <button
        className={handleClassName()}
        onClick={handleAction}
      />
      <span
        className={handleMessageShow()}>{location.pathname === '/' ? "Войдите, чтобы сохранять статьи" : "Убрать из сохранённых"}</span>
    </>
  )
}

export default CardButton;