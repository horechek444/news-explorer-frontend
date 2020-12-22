import React from "react";
import './Navigation.css';
import {useLocation, NavLink} from 'react-router-dom';

const Navigation = ({loggedIn}) => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="navigation__item navigation__item_active">
        <NavLink className={`${location.pathname === '/saved-news' ? `navigation__link navigation__link_type_saved-news` : `navigation__link navigation__link_type_main-active`}`} to="/">Главная</NavLink>
      </div>
      <div className={`${loggedIn ? `navigation__item navigation__item_active` : `navigation__item`}`}>
        <NavLink className="navigation__link navigation__link_type_main" activeClassName="navigation__link navigation__link_type_saved-news-active" to="/saved-news">Сохранённые статьи</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;