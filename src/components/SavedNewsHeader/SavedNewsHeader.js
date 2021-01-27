import React from "react";
import './SavedNewsHeader.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

const SavedNewsHeader = ({userArticles}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const keywords = userArticles ? Array.from(userArticles, ({keyword}) => keyword) : [];

  for (let length = keywords.length, i = length; --i >= 0;) {
    if (keywords[keywords[i]]) {
      keywords[keywords[i]] += 1;
      keywords.splice(i, 1);
    } else {
      keywords[keywords[i]] = 1;
    }
  }

  keywords.sort(function (a, b) {
    return keywords[b] - keywords[a];
  });

  const handleText = () => {
    if (keywords.length === 3) {
      return keywords[2][0].toUpperCase() + keywords[2].slice(1, keywords[2].length);
    } else if (keywords.length > 3) {
      return `${keywords.length - 2}-м другим`;
    }
  }

  return (
    <section className="saved-news__header">
      <span className="saved-news__subtitle">Сохранённые статьи</span>
      <h2 className="saved-news__title">{currentUser.name}, у
        вас {userArticles.length ? userArticles.length : "пока нет"} сохранённых статей</h2>
      <span
        className="saved-news__keywords">По ключевым словам: <b>{keywords.length > 0 ? keywords[0][0].toUpperCase() + keywords[0].slice(1, keywords[0].length) : " ничего не найдено"}</b>
        <b>{", " + keywords.length > 1 ? keywords[1][0].toUpperCase() + keywords[1].slice(1, keywords[1].length) : ""}</b>{keywords.length >= 3 ? " и " : ""}<b>{handleText()}</b>
      </span>
    </section>
  )
}


export default SavedNewsHeader;