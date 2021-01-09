import React from "react";
import './Main.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

const Main = ({isOpen, onLoginPopupOpen, handleToggleMenuClick, name, loggedIn, onClose, handleLogOut, isPopupOpen}) => {


  return (
    <>
      <div className="header-search-wrapper">
        <Header
          name={name}
          isOpen={isOpen}
          handleToggleMenuClick={handleToggleMenuClick}
          loggedIn={loggedIn}
          onClose={onClose}
          onLoginPopupOpen={onLoginPopupOpen}
          handleLogOut={handleLogOut}
          isPopupOpen={isPopupOpen}/>
        <SearchForm isOpen={isOpen}/>
      </div>
      <main className="main">
        <Preloader/>
        <NotFound/>
        <NewsCardList/>
        <About/>
      </main>
    </>
  )
}

export default Main;