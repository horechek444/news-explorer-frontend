import React from "react";
import './MarkButton.css';
import {useLocation} from 'react-router-dom';

const MarkButton = () => {
  const location = useLocation();

  return (
    <>
      <button className={location.pathname === '/' ? "button mark-button mark-button_active" : "button mark-button mark-button_active mark-button_type_saved-news"}/>
      <span
        className={location.pathname === '/' ? "mark-button__message" : "mark-button__message mark-button__message_type_saved-news"}>{location.pathname === '/' ? "Войдите, чтобы сохранять статьи" : "Убрать из сохранённых"}</span>
    </>
  )
}

export default MarkButton;