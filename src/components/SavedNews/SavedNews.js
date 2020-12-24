import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

const SavedNews = ({loggedIn}) => {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <SavedNewsHeader/>
      <NewsCardList/>
      <Footer/>
    </>
  )
}

export default SavedNews;