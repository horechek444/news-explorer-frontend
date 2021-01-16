import React from "react";
import './NewsCard.css';
import CardButton from "../CardButton/CardButton";
import {useLocation} from 'react-router-dom';

const NewsCard = ({article}) => {
  const location = useLocation();
  const titleHeightRef = React.useRef("");

  const titleHeight = ((titleHeightRef.current && titleHeightRef.current.offsetHeight) || 0)

  const handleLines = () => {
    if (window.innerWidth >= 781) {
      if (titleHeight === 29) {
        return {"--lines": "6"};
      } else if (titleHeight === 58) {
        return {"--lines": "5"};
      } else if (titleHeight === 87) {
        return {"--lines": "4"};
      }
    } else if (window.innerWidth >= 571 && window.innerWidth <= 780) {
      if (titleHeight === 24) {
        return {"--lines": "6"};
      }else if (titleHeight === 48) {
        return {"--lines": "5"};
      } else if (titleHeight === 72) {
        return {"--lines": "4"};
      }
    } else if (window.innerWidth <= 570) {
      if (titleHeight === 27) {
        return {"--lines": "5"};
      } else if (titleHeight === 54) {
        return {"--lines": "4"};
      } else if (titleHeight === 81) {
        return {"--lines": "3"};
      }
    }
  }

  React.useEffect(() => handleLines(), [handleLines]);

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
    <li className="news-card">
      <CardButton/>
      <img className="news-card__picture" src={article.urlToImage} alt={article.title}/>
      <div className="news-card__cover">
        <span className="news-card__date">{handleDate(article.publishedAt)}</span>
        <h3 ref={titleHeightRef} className="news-card__title">{article.title}</h3>
        <p className="news-card__paragraph" style={handleLines()}>{article.description}</p>
        <span className="news-card__source">{article.source.name}</span>
        <span
          className={location.pathname === '/' ? "news-card__theme" : "news-card__theme news-card__theme_type_saved-news"}>Природа</span>
      </div>
    </li>
  )
};

export default NewsCard;