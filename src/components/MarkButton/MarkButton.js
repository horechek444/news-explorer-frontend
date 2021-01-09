import React from "react";
import './MarkButton.css';
import {useLocation} from 'react-router-dom';

const MarkButton = () => {
  const location = useLocation();

  return (
    <>
      <button className={location.pathname === '/' ? "button mark-button mark-button_active" : "button mark-button"}/>
      <span className="mark-button__message">Войдите, чтобы сохранять статьи</span>
    </>
  )
}

export default MarkButton;