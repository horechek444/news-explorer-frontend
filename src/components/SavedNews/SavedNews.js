import React from "react";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Information from "../Information/Information";

const SavedNews = ({isOpen, handleToggleMenuClick, name, onLoginPopupOpen, loggedIn, onClose, onSignOut, loading, articles}) => {
  return (
    <>
      <Header
        name={name}
        isOpen={isOpen}
        handleToggleMenuClick={handleToggleMenuClick}
        loggedIn={loggedIn}
        onClose={onClose}
        onLoginPopupOpen={onLoginPopupOpen}
        onSignOut={onSignOut}
      />
      <SavedNewsHeader name={name}/>
      <Information loading={loading}/>
      <NewsCardList articles={articles}/>
    </>
  )
}

export default SavedNews;