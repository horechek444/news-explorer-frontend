import React from "react";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NotFound from "../NotFound/NotFound";

const SavedNews = ({isOpen, handleToggleMenuClick, name, onLoginPopupOpen, loggedIn, onClose, handleLogOut}) => {
  return (
    <>
      <Header
        name={name}
        isOpen={isOpen}
        handleToggleMenuClick={handleToggleMenuClick}
        loggedIn={loggedIn}
        onClose={onClose}
        onLoginPopupOpen={onLoginPopupOpen}
        handleLogOut={handleLogOut}
      />
      <SavedNewsHeader name={name}/>
      <NotFound/>
      <NewsCardList/>
    </>
  )
}

export default SavedNews;