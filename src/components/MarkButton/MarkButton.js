import React from "react";
import './MarkButton.css';

const MarkButton = () => {
  return (
    <>
      <svg className="mark-button" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#fff"/>
        <path className="mark-button__color" d="M19.382 23.714L14 27.943V12h12v15.942l-5.382-4.228-.618-.486-.618.486z"
              stroke="#B6BCBF"
              strokeWidth="2"/>
      </svg>
      <span className="mark-button__message">Войдите, чтобы сохранять статьи</span>
    </>
  )
}

export default MarkButton;