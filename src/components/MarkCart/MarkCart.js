import React from "react";
import './MarkCart.css';
import {useLocation} from 'react-router-dom';

const MarkCart = () => {
  const location = useLocation();

  return (
    <>
      <button
        className={location.pathname === '/saved-news' ? "button mark-cart__button mark-cart__button_active" : "button mark-cart__button"}/>
      <span className="mark-cart__message">Убрать из сохранённых</span>
    </>
  )
}

export default MarkCart;