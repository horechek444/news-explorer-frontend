import React from "react";
import {NavLink} from "react-router-dom";
import './FooterNavigation.css';

const FooterNavigation = () => {
  return (
    <nav className="footer__navigation">
      <ul className="footer__nav-list">
        <li className="footer__nav-item">
          <NavLink className="hover-effect footer__nav-link" to="/">Главная</NavLink>
        </li>
        <li className="footer__nav-item">
          <a className="hover-effect footer__nav-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNavigation;