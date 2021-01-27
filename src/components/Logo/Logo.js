import React from "react";
import './Logo.css';
import {Link} from 'react-router-dom';

const Logo = ({isMain}) => {
  return (
    <Link className="hover-effect logo__link" to="/">
      <div className={isMain ? "logo logo_type_main" : "logo logo_type_saved-news"}/>
    </Link>
  )
}

export default Logo;