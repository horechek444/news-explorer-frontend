import React from "react";
import './MarkButton.css';

const MarkButton = () => {
  return (
    <>
      <button className="button mark-button"/>
      <span className="mark-button__message">Войдите, чтобы сохранять статьи</span>
    </>
  )
}

export default MarkButton;