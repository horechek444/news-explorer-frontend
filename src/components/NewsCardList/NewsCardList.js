import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';
import {useLocation} from 'react-router-dom';

const NewsCardList = ({articles, getNewsError, loading, loggedIn, onRegisterPopupOpen, userArticles, onArticleSave, onArticleDelete}) => {
  const location = useLocation();
  const [count, setCount] = React.useState(3);

  const handleShowResults = () => {
    if (location.pathname === '/saved-news') {
      return "news-cards news-cards_type_saved-news news-cards_active";
    } else if ((!loading && articles.length) || getNewsError) {
      return "news-cards news-cards_active";
    } else if (!articles.length) {
      return "news-cards";
    }
  }

  const handleAdd = () => {
    (count < articles.length - 1) ? setCount(count + 3) : setCount(articles.length - 1);
  };

  return (
    <section className={handleShowResults()}>
      <h2
        className={location.pathname === '/saved-news' ? "news-cards__title" : "news-cards__title news-cards__title_active"}>{(location.pathname !== '/saved-news' && getNewsError) ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" : "Результаты поиска"}</h2>
      <ul className="news-cards__list">
        {location.pathname === '/' ?  articles.slice(0, count).map((article, index) => <NewsCard key={index} article={article} loggedIn={loggedIn} onRegisterPopupOpen={onRegisterPopupOpen} onArticleSave={onArticleSave}/>) : userArticles.map((userArticle, index) => <NewsCard key={index} article={userArticle} onArticleDelete={onArticleDelete}/>)}
      </ul>
      <button
        className={(location.pathname === '/saved-news' || count >= articles.length - 1 || articles.length - 1 <= 3) ? "button news-cards__button" : "button news-cards__button news-cards__button_active"}
        onClick={handleAdd}>Показать еще</button>
    </section>
  )
}

export default NewsCardList;