import React from "react";
import './Main.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Main = ({loggedIn}) => {
  return (
    <>
      <div className="header-search-wrapper">
        <Header loggedIn={loggedIn}/>
        <SearchForm/>
      </div>
      <main className="main">
        <NewsCardList/>
        <About/>
      </main>
      <Footer/>
    </>
  )
}

export default Main;