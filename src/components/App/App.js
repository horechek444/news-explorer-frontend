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
import mainApi from "../../utils/MainApi";
import {lastDate, nowDate, setArticlesData, getArticlesData} from "../../utils/utils";
import {setToken, getToken, removeToken} from "../../utils/token";
import * as auth from '../../auth';
// import Login from "../Login/Login";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isPopupTypeLoginOpen, setPopupTypeLoginOpen] = React.useState(false);
  const [isPopupTypeRegisterOpen, setPopupTypeRegisterOpen] = React.useState(false);
  const [isPopupTypeSuccessOpen, setPopupTypeSuccessOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState([]);
  const [searchInputValue, setSearchInputValue] = React.useState('');
  const [searchError, setSearchError] = React.useState("error");
  const [serverError, setServerError] = React.useState(true); //todo
  const [newsError, setNewsError] = React.useState('');
  const [articles, setArticles] = React.useState(getArticlesData() ? getArticlesData() : null);
  const [userArticles, setUserArticles] = React.useState([]);
  const history = useHistory();

  const handleContentGetter = (token) => {
    return auth.getContent(token)
      .then((res) => {
        setLoggedIn(true);
        history.push('/');
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
    setIsLoading(true);
    auth.authorize(email, password)
      .then((data) => {
        if (!data) {
          return
        }
        if (data.token) {
          setToken(data.token);
          handleContentGetter(data.token);
        }
      })
      .catch((err) => {
        if (err === 400) {
          setServerError('Произошла ошибка, не передано одно из полей');
        } else if (err === 401) {
          setServerError('Произошла ошибка, пользователь с данным email не найден');
        }
      })
      .finally(() => {
        setIsLoading(false);
        handleCloseAllPopups();
      })
  };

  const onRegister = (email, password, name) => {
    setIsLoading(true);
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
      }).finally(() => {
      setIsLoading(false);
      handleCloseAllPopups();
    })
  };

  const onSignOut = () => {
    removeToken();
    setLoggedIn(false);
    history.push('/');
  }

  const getAllArticles = (keyword, nowDate, lastDate) => {
    setIsLoading(true);
    newsApi.getNews(keyword, nowDate, lastDate)
      .then((data) => {
        const results = data.articles.map((article) => ({
          keyword: keyword,
          title: article.title,
          text: article.description,
          date: article.publishedAt,
          source: article.source.name,
          link: article.url,
          image: article.urlToImage,
        }));
        setArticles(results);
        setArticlesData(results);
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
      getAllArticles(searchInputValue, lastDate, nowDate);
      setSearchInputValue('');
    }
  }

  const getUserAndSavedArticles = async () => {
    try {
      const [userInfo, userArticles] = await Promise.all([mainApi.getUserInfo(), mainApi.getArticles()]);
      setUserArticles(userArticles);
      setCurrentUser(userInfo);
    } catch (err) {
      console.log(`${err}`);
    }
  };

  React.useEffect(() => {
    if (!loggedIn) return;
    getUserAndSavedArticles();
  }, [loggedIn]);

  const handleArticleSave = (article) => {
    setIsLoading(true);
    mainApi.createArticle(article)
      .then((savedArticle) => {
        setUserArticles([...userArticles, savedArticle]);
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleArticleDelete = (article) => {
    setIsLoading(true);
    mainApi.deleteArticle(article._id)
      .then(() => {
        const articlesAfterDelete = userArticles.filter((c) => c._id !== article._id);
        setUserArticles(articlesAfterDelete);
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
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
          <CurrentUserContext.Provider value={currentUser}>
            <Route exact path="/">
              <Main
                isOpen={isMenuOpen}
                onLoginPopupOpen={handlePopupTypeLoginOpen}
                onRegisterPopupOpen={handlePopupTypeRegisterOpen}
                handleToggleMenuClick={handleToggleMenuClick}
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
                userArticles={userArticles}
                onArticleSave={handleArticleSave}
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
                loggedIn={loggedIn}
                onClose={handleCloseMenuClick}
                onSignOut={onSignOut}
                loading={isLoading}
                articles={articles}
                userArticles={userArticles}
                onArticleDelete={handleArticleDelete}
              />
            </Route>
          </CurrentUserContext.Provider>
        </Switch>
        <Footer/>
        {/*<Login onLogin={onLogin}/>*/}
      </div>
    </div>
  );
}

export default App;
