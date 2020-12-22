import React from "react";
import './Main.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";

const Main = ({loggedIn}) => {
  return (
    <main className="main">
      <div className="header-search-wrapper">
        <Header loggedIn={loggedIn}/>
        <SearchForm/>
      </div>
      <SearchResults/>
    </main>
  )
}

export default Main;