import React from "react";
import {NavLink} from "react-router-dom";
import './FooterNavigation.css';

const FooterNavigation = () => {
  return (
    <nav className="footer__navigation">
      <ul className="footer__nav-list">
        <li className="footer__nav-item">
          <NavLink className="hover-effect footer__nav-link" to="/" target="_blank">Главная</NavLink>
        </li>
        <li className="footer__nav-item">
          <NavLink className="hover-effect footer__nav-link" to="https://praktikum.yandex.ru/" target="_blank">Яндекс.Практикум</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNavigation;