import React from "react";
import './Main.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

const Main = ({loggedIn}) => {
  return (
    <div className="header-search-wrapper">
      <Header loggedIn={loggedIn} />
      <SearchForm />
    </div>
  )
}

export default Main;