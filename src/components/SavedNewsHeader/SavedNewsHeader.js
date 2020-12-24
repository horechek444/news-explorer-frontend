import React from "react";
import './SavedNewsHeader.css';

const SavedNewsHeader = () => {
  return (
    <section className="saved-news__header">
      <span className="saved-news__subtitle">Сохранённые статьи</span>
      <h2 className="saved-news__title">Таня, у вас 5 сохранённых статей</h2>
      <span className="saved-news__keywords">По ключевым словам: <b>Природа,</b> <b>Тайга</b> и <b>2-м другим</b></span>
    </section>
  )
}

export default SavedNewsHeader;