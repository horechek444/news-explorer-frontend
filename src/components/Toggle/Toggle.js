import React from "react";
import './Toggle.css';
import {useLocation} from 'react-router-dom';

const Toggle = ({open, handleOpenClick}) => {
  const location = useLocation();

  const handleToggleClassNameClick = () => {
    if (location.pathname === '/saved-news' && open) {
      return "toggle toggle_type_saved-news toggle_type_active";
    } else if (location.pathname === '/saved-news') {
      return "toggle toggle_type_saved-news";
    } else if (location.pathname === '/' && open) {
      return "toggle toggle_type_active";
    } else {
      return "toggle";
    }
  }

  return (
    <button className={handleToggleClassNameClick()} onClick={handleOpenClick}/>
  )
}

export default Toggle;