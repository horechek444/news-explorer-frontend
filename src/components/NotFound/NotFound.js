import React from "react";
import './NotFound.css'

const NotFound = () => {
  return (
    <section className="no-results">
      <div className="no-results__image"/>
      <span className="no-results__title">Ничего не найдено</span>
      <span className="no-results__subtitle">К сожалению по вашему запросу ничего не найдено.</span>
    </section>
  )
}

export default NotFound;