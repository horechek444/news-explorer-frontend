import React from "react";
import './Information.css'

const Information = ({loading, noResults}) => {
  const handleType = () => {
    if (loading) {
      return "information__preloader";
    } else if (noResults) {
      return "information__no-results";
    }
  }

  const handleTitle = () => {
    if (loading) {
      return "information__title information__title_type_loading";
    } else if (noResults) {
      return "information__title";
    }
  }

  const handleText = () => {
    if (loading) {
      return "Идет поиск новостей...";
    } else if (noResults) {
      return "К сожалению по вашему запросу ничего не найдено.";
    }
  }

  return (
    <section className={(loading || noResults) ? "information information_active" : "information"}>
      <div className={handleType()}/>
      <span className={handleTitle()}>Ничего не найдено</span>
      <span className="information__subtitle">{handleText()}</span>
    </section>
  )
}

export default Information;