import React from "react";
import Card from "../Card/Card";

const SearchResults = () => {
  return (
    <section className="search-results">
      <h2 className="search-results__title">Результаты поиска</h2>
      <ul className="cards__list">
        <Card/>
      </ul>
      <button className="search-results__button">Показать еще</button>
    </section>
  )
}

export default SearchResults;