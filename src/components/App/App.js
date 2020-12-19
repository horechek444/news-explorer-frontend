import React from "react";
import './App.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function App() {
  return (
    <div className="page">
      <div className="page__cover">
        <div className="header-search-wrapper">
          <Header/>
          <SearchForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
