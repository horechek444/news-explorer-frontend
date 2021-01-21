import React from "react";
import './NewsCard.css';
import CardButton from "../CardButton/CardButton";
import {useLocation} from 'react-router-dom';

const NewsCard = ({article, loggedIn, onRegisterPopupOpen}) => {
  const location = useLocation();
  const titleHeightRef = React.useRef("");
  const [quantity, setQuantity] = React.useState({});

  React.useEffect(() => {
    const titleHeight = (titleHeightRef.current && titleHeightRef.current.offsetHeight) || 0;

    if (titleHeight >= 72 && titleHeight <= 87) {
      setQuantity({"--lines": "4"});
    } else if (titleHeight >= 48 && titleHeight <= 58) {
      setQuantity({"--lines": "5"});
    } else if (titleHeight < 30) {
      setQuantity({"--lines": "6"});
    }
  }, [titleHeightRef]);

  const handleDate = (date) => {
    const parsedDate = new Date(date.slice(0, 10).split('-'));
    return new Intl.DateTimeFormat('ru', {
      day: "numeric",
      month: "long"
    }).format(parsedDate) + ", " + new Intl.DateTimeFormat('ru', {
      year: "numeric"
    }).format(parsedDate);
  }

  return (
    <li className={"news-card"}>
      <CardButton loggedIn={loggedIn} onRegisterPopupOpen={onRegisterPopupOpen}/>
      <img className="news-card__picture" src={article.urlToImage} alt={article.title}/>
      <div className="news-card__cover">
        <span className="news-card__date">{handleDate(article.publishedAt)}</span>
        <h3 ref={titleHeightRef} className="news-card__title">{article.title}</h3>
        <p className="news-card__paragraph" style={quantity}>{article.description}</p>
        <span className="news-card__source">{article.source.name}</span>
        <span
          className={location.pathname === '/' ? "news-card__theme" : "news-card__theme news-card__theme_type_saved-news"}>Природа</span>
      </div>
    </li>
  )
};

export default NewsCard;