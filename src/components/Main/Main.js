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
                name, loggedIn, onClose,
                handleLogOut, isPopupOpen,
                loading, articles,
                handleSearchInputChange,
                handleSearchSubmit,
                searchInputValue,
                searchError,
                showResults,
                noResults}) => {
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
        <SearchForm
          isOpen={isOpen}
          handleSearchInputChange={handleSearchInputChange}
          handleSearchSubmit={handleSearchSubmit}
          searchInputValue={searchInputValue}
          error={searchError}
        />
      </div>
      <main className="main">
        <Information loading={loading}
                     noResults={noResults}/>
        <NewsCardList
          articles={articles}
          showResults={showResults}
        />
        <About/>
      </main>
    </>
  )
}

export default Main;