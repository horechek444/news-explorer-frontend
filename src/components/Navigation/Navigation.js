import React from "react";
import './Navigation.css';
import {useLocation, Link} from 'react-router-dom';

const Navigation = ({loggedIn}) => {
  const location = useLocation();

  return (
    <ul className="navigation">
      <li className="navigation__item navigation__item_active">
        <Link className={`${location.pathname === '/saved-news' ? `navigation__link navigation__link_type_saved-news` : `navigation__link navigation__link_type_main-active`}`} to="/">Главная</Link>
      </li>
      <li className={`${loggedIn ? `navigation__item navigation__item_active` : `navigation__item`}`}>
        <Link className={`${location.pathname === '/saved-news' ? `navigation__link navigation__link_type_saved-news-active` : `navigation__link navigation__link_type_main`}`} to="/saved-news">Сохранённые статьи</Link>
      </li>
    </ul>
  )
}

export default Navigation;