import React from "react";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

const SavedNews = ({open, handleOpenClick, name, loggedIn}) => {
  return (
    <>
      <Header name={name} open={open} handleOpenClick={handleOpenClick} loggedIn={loggedIn}/>
      <SavedNewsHeader name={name}/>
      <NewsCardList/>
    </>
  )
}

export default SavedNews;