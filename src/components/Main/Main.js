import React from "react";
import './Main.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import Information from "../Information/Information";

const Main = ({isOpen,
                onLoginPopupOpen,
                handleToggleMenuClick,
                loggedIn, onClose,
                isPopupOpen, loading, articles,
                handleSearchInputChange,
                handleSearchSubmit,
                searchInputValue,
                searchError, getNewsError,
                onSignOut, onRegisterPopupOpen, onArticleSave
                }) => {
  return (
    <>
      <div className="header-search-wrapper">
        <Header
          isOpen={isOpen}
          handleToggleMenuClick={handleToggleMenuClick}
          loggedIn={loggedIn}
          onClose={onClose}
          onLoginPopupOpen={onLoginPopupOpen}
          isPopupOpen={isPopupOpen}
          onSignOut={onSignOut}
        />
        <SearchForm
          isOpen={isOpen}
          handleSearchInputChange={handleSearchInputChange}
          handleSearchSubmit={handleSearchSubmit}
          searchInputValue={searchInputValue}
          error={searchError}
        />
      </div>
      <main className="main">
        {!loading && articles && articles.length ? <NewsCardList articles={articles} getNewsError={getNewsError} loading={loading} loggedIn={loggedIn} onRegisterPopupOpen={onRegisterPopupOpen} onArticleSave={onArticleSave}/> : <Information articles={articles} loading={loading}/>}
        <About/>
      </main>
    </>
  )
}

export default Main;