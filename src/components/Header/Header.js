import React from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Login from '../Login/Login';
import {useLocation} from 'react-router-dom';
import Toggle from "../Toggle/Toggle";

const Header = ({loggedIn}) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const handleOpenClick = () => {
    setOpen(!open);
  }

  const handleHeaderClassNameClick = () => {
    if (location.pathname === '/saved-news') {
      return "header header_type_saved-news";
    } else if (location.pathname === '/saved-news' && open) {
      return "header header_type_active header_type_saved-news";
    } else if (location.pathname === '/' && open) {
      return "header header_type_active header_type_main";
    } else {
      return "header header_type_main";
    }
  }

  const handleContainerClassNameClick = () => {
    if (location.pathname === '/saved-news' || (location.pathname === '/saved-news' && open)) {
      return "header__container header__container_type_saved-news";
    } else if (location.pathname === '/' && open) {
      return "header__container header__container_type_main";
    } else {
      return "header__container";
    }
  }

  const handleCoverClassNameClick = () => {
    if (location.pathname === '/saved-news' && open) {
      return "header__cover header__cover_type_saved-news";
    } else if (location.pathname === '/' && open) {
      return "header__cover header__cover_type_main";
    } else {
      return "header__cover";
    }
  }

  return (
    <header className={handleHeaderClassNameClick()}>
      <div className={handleContainerClassNameClick()}>
        <div className="header__unite">
          <Logo/>
          <Toggle open={open} handleOpenClick={handleOpenClick}/>
        </div>
        <div className={handleCoverClassNameClick()}>
          <Navigation loggedIn={loggedIn}/>
          <Login loggedIn={loggedIn}/>
        </div>
      </div>
    </header>
  )
}

export default Header;