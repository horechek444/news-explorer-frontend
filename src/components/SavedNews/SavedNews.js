import React from "react";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Information from "../Information/Information";

const SavedNews = ({isOpen, handleToggleMenuClick, onLoginPopupOpen, loggedIn, onClose, onSignOut, loading, articles, userArticles, onArticleDelete}) => {
  return (
    <>
      <Header
        isOpen={isOpen}
        handleToggleMenuClick={handleToggleMenuClick}
        loggedIn={loggedIn}
        onClose={onClose}
        onLoginPopupOpen={onLoginPopupOpen}
        onSignOut={onSignOut}
      />
      <SavedNewsHeader userArticles={userArticles}/>
      {!userArticles.length ? <Information loading={loading} userArticles={userArticles}/> : <NewsCardList articles={articles} userArticles={userArticles} onArticleDelete={onArticleDelete}/>}
    </>
  )
}

export default SavedNews;