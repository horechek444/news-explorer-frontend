import React from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Login from '../Login/Login';
import {useLocation} from 'react-router-dom';

const Header = ({loggedIn}) => {
  const location = useLocation();

  return (
    <header
      className={`${location.pathname === '/saved-news' ? `header header_type_saved-news` : `header header_type_main`}`}>
      <Logo/>
      <div className="header__cover">
        <Navigation loggedIn={loggedIn}/>
        <Login loggedIn={loggedIn}/>
      </div>
    </header>
  )
}

export default Header;