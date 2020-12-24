import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";

const SavedNews = ({loggedIn}) => {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <NewsCardList/>
      <Footer/>
    </>
  )
}

export default SavedNews;