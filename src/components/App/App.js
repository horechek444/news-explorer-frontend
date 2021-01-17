import React from "react";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import {Route, Switch} from 'react-router-dom';
import '../../vendor/fonts/fonts.css';
import Footer from "../Footer/Footer";
import PopupTypeRegister from "../PopupTypeRegister/PopupTypeRegister";
import PopupTypeLogin from "../PopupTypeLogin/PopupTypeLogin";
import PopupTypeSuccess from "../PopupTypeSuccess/PopupTypeSuccess";
import newsApi from "../../utils/NewsApi";
import {lastDate, nowDate, setArticlesData, getArticlesData} from "../../utils/utils";

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isPopupTypeLoginOpen, setPopupTypeLoginOpen] = React.useState(false);
  const [isPopupTypeRegisterOpen, setPopupTypeRegisterOpen] = React.useState(false);
  const [isPopupTypeSuccessOpen, setPopupTypeSuccessOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [articles, setArticles] = React.useState([]);
  const [isRegister, setIsRegister] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const name = "Таня";
  const [searchInputValue, setSearchInputValue] = React.useState('');
  const [searchError, setSearchError] = React.useState("error");
  const [showResults, setShowResults] = React.useState(false);
  const [noResults, setNoResults] = React.useState(false);

  const getArticles = (keyword, nowDate, lastDate) => {
    setIsLoading(true);
    newsApi.getNews(keyword, nowDate, lastDate)
      .then((data) => {
        setArticles(data.articles);
        setArticlesData(data.articles);
        console.log(data.articles);
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
    setSearchError("error");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchInputValue) {
      setSearchError("error error_type_search error_active");
      setShowResults(false);
    } else {
      getArticles(searchInputValue, lastDate, nowDate);
      setSearchInputValue('');
      dataCheck();
    }
  };

  const dataCheck = () => {
    const articles_data = getArticlesData();
    if (!articles_data) {
      setShowResults(false);
      setNoResults(true);
    } else {
      setShowResults(true);
      setNoResults(false);
    }
  }

  React.useEffect(() => {
    dataCheck();
  }, []);

  const handleToggleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  }

  const handleCloseMenuClick = () => {
    setMenuOpen(false);
  }

  const handleCloseAllClick = () => {
    setPopupTypeLoginOpen(false);
    setPopupTypeRegisterOpen(false);
    setPopupTypeSuccessOpen(false);
  }

  const handlePopupTypeLoginOpen = () => {
    setPopupTypeLoginOpen(true);
  }

  const handlePopupTypeRegisterOpen = () => {
    setPopupTypeRegisterOpen(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
  }

  const handlePopupOpenDetector = () => {
    return isPopupTypeLoginOpen || isPopupTypeRegisterOpen || isPopupTypeSuccessOpen;
  }

  return (
    <div className="page">
      <div className="page__cover">
        <Switch>
          <Route exact path="/">
            <Main
              isOpen={isMenuOpen}
              onLoginPopupOpen={handlePopupTypeLoginOpen}
              handleToggleMenuClick={handleToggleMenuClick}
              name={name}
              loggedIn={loggedIn}
              onClose={handleCloseMenuClick}
              handleLogOut={handleLogOut}
              isPopupOpen={handlePopupOpenDetector}
              loading={isLoading}
              articles={articles}
              handleSearchSubmit={handleSearchSubmit}
              handleSearchInputChange={handleSearchInputChange}
              searchInputValue={searchInputValue}
              searchError={searchError}
              showResults={showResults}
              noResults={noResults}
            />
            <PopupTypeLogin
              isOpen={isPopupTypeLoginOpen}
              onClose={handleCloseAllClick}
              onRegisterPopupOpen={handlePopupTypeRegisterOpen}/>
            <PopupTypeRegister
              isOpen={isPopupTypeRegisterOpen}
              onClose={handleCloseAllClick}
              onLoginPopupOpen={handlePopupTypeLoginOpen}/>
            <PopupTypeSuccess
              isOpen={isPopupTypeSuccessOpen}
              isRegister={isRegister}
              onClose={handleCloseAllClick}
              onLoginPopupOpen={handlePopupTypeLoginOpen}/>
          </Route>
          <Route path="/saved-news">
            <SavedNews
              isOpen={isMenuOpen}
              onLoginPopupOpen={handlePopupTypeLoginOpen}
              handleToggleMenuClick={handleToggleMenuClick}
              name={name}
              loggedIn={loggedIn}
              onClose={handleCloseMenuClick}
              handleLogOut={handleLogOut}
              loading={isLoading}
              articles={articles}
            />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
