import React from "react";
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <h1 className="search-form__title">Что творится в мире?</h1>
        <p className="search-form__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.</p>
        <div className="search-form__cover">
          <label className="search-form__control">
            <input className="search-form__input" type="text" placeholder="Введите тему новости"/>
          </label>
          <input className="button search-form__submit" type="submit" value="Искать"/>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;