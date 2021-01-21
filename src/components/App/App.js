import React from "react";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import {Route, Switch, useHistory} from 'react-router-dom';
import '../../vendor/fonts/fonts.css';
import Footer from "../Footer/Footer";
import PopupTypeRegister from "../PopupTypeRegister/PopupTypeRegister";
import PopupTypeLogin from "../PopupTypeLogin/PopupTypeLogin";
import PopupTypeSuccess from "../PopupTypeSuccess/PopupTypeSuccess";
import newsApi from "../../utils/NewsApi";
import {lastDate, nowDate, setArticlesData, getArticlesData} from "../../utils/utils";
import {setToken, getToken, removeToken} from "../../utils/token";
import * as auth from '../../auth';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isPopupTypeLoginOpen, setPopupTypeLoginOpen] = React.useState(false);
  const [isPopupTypeRegisterOpen, setPopupTypeRegisterOpen] = React.useState(false);
  const [isPopupTypeSuccessOpen, setPopupTypeSuccessOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [name, setName] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [searchInputValue, setSearchInputValue] = React.useState('');
  const [searchError, setSearchError] = React.useState("error");
  const [serverError, setServerError] = React.useState(true); //todo
  const [newsError, setNewsError] = React.useState('');
  const [articles, setArticles] = React.useState(getArticlesData() ? getArticlesData() : null);
  const history = useHistory();

  const handleContentGetter = (token) => {
    return auth.getContent(token)
      .then((res) => {
        setName(res.name);
        setLoggedIn(true);
        history.push('/'); //todo ?
      })
  }

  const tokenCheck = () => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    handleContentGetter(jwt)
      .catch((err) => {
        if (err === 401) {
          console.log('Произошла ошибка, токен не был передан, был передан не в том формате или не является корректным')
        }
      });
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const onLogin = (email, password) => {
    auth.authorize(email, password)
      .then((data) => {
        if (!data) {
          return
        }
        if (data.token) {
          setToken(data.token);
          handleContentGetter(data.token)
        }
      })
      .catch((err) => {
        if (err === 400) {
          setServerError('Произошла ошибка, не передано одно из полей');
        } else if (err === 401) {
          setServerError('Произошла ошибка, пользователь с данным email не найден');
        }
      });
  };

  const onRegister = (email, password, name) => {
    auth.register(email, password, name)
      .then((res) => {
        if (res.statusCode !== 400) {
          setIsRegister(true);
          setPopupTypeSuccessOpen(true);
        }
      })
      .catch((err) => {
        setIsRegister(false);
        setServerError(`${err}`);
        if (err === 400) {
          setServerError('Произошла ошибка, некорректно заполнено одно из полей');
        }
      });
  };

  const onSignOut = () => {
    removeToken();
    setName(null);
    setLoggedIn(false);
    history.push('/');
  }

  const getArticles = (keyword, nowDate, lastDate) => {
    setIsLoading(true);
    newsApi.getNews(keyword, nowDate, lastDate)
      .then((data) => {
        setArticles(data.articles);
        setArticlesData(data.articles);
      })
      .catch((err) => {
        setNewsError(`${err}`);
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
    setSearchError("error");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchInputValue) {
      setSearchError("error error_type_search error_active");
    } else {
      getArticles(searchInputValue, lastDate, nowDate);
      setSearchInputValue('');
    }
  }

  const handleToggleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  }

  const handleCloseMenuClick = () => {
    setMenuOpen(false);
  }

  const handleCloseAllPopups = () => {
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
              onRegisterPopupOpen={handlePopupTypeRegisterOpen}
              handleToggleMenuClick={handleToggleMenuClick}
              name={name}
              loggedIn={loggedIn}
              onClose={handleCloseMenuClick}
              isPopupOpen={handlePopupOpenDetector}
              loading={isLoading}
              articles={articles}
              handleSearchSubmit={handleSearchSubmit}
              handleSearchInputChange={handleSearchInputChange}
              searchInputValue={searchInputValue}
              searchError={searchError}
              getNewsError={newsError}
              onSignOut={onSignOut}
            />
            <PopupTypeLogin
              isOpen={isPopupTypeLoginOpen}
              onClose={handleCloseAllPopups}
              onRegisterPopupOpen={handlePopupTypeRegisterOpen}
              loading={isLoading}
              serverError={serverError}
              onLogin={onLogin}/>
            <PopupTypeRegister
              isOpen={isPopupTypeRegisterOpen}
              onClose={handleCloseAllPopups}
              onLoginPopupOpen={handlePopupTypeLoginOpen}
              loading={isLoading}
              serverError={serverError}
              onRegister={onRegister}/>
            <PopupTypeSuccess
              isOpen={isPopupTypeSuccessOpen}
              isRegister={isRegister}
              onClose={handleCloseAllPopups}
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
              onSignOut={onSignOut}
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
