import React from "react";
import './NewsCard.css';

const NewsCard = () => {
  return (
    <li className="news-card">
      {/*<button/>*/}
      {/*<button/>*/}
      <img className="news-card__picture" src="" alt=""/>
      <span className="news-card__date">2 августа, 2019</span>
      <h3 className="news-card__title">Национальное достояние – парки</h3>
      <p className="news-card__paragraph">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
      <span className="news-card__source">Дзен</span>
    </li>
  )
}

export default NewsCard;