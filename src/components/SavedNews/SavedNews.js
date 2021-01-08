import React from "react";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

const SavedNews = ({isOpen, handleOpenMenuClick, name, loggedIn}) => {
  return (
    <>
      <Header name={name} open={isOpen} handleOpenMenuClick={handleOpenMenuClick} loggedIn={loggedIn}/>
      <SavedNewsHeader name={name}/>
      <NewsCardList/>
    </>
  )
}

export default SavedNews;