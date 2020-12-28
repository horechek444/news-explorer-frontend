import React from "react";
import './MarkCart.css';

const MarkCart = () => {
  return (
    <>
      <svg className="mark-cart" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#fff"/>
        <path className="mark-cart__color" fillRule="evenodd" clipRule="evenodd"
              d="M23 11h-6v2h-6v2h18v-2h-6v-2zm-10 6v11a2 2 0 002 2h10a2 2 0 002-2V17h-2v11H15V17h-2zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2z"
              fill="#B6BCBF"/>
      </svg>
      <span className="mark-cart__message">Убрать из сохранённых</span>
    </>
  )
}

export default MarkCart;