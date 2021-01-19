import React from "react";
import './Information.css'

const Information = ({loading, articles}) => {
  const handleType = () => {
    if (loading) {
      return "information__preloader";
    } else if (!loading && articles && articles.length === 0) {
      return "information__no-results";
    }
  }

  const handleTitle = () => {
    if (loading) {
      return "information__title information__title_type_loading";
    } else if (!loading && articles && articles.length === 0) {
      return "information__title";
    }
  }

  const handleText = () => {
    if (loading) {
      return "Идет поиск новостей...";
    } else if (!loading && articles && articles.length === 0) {
      return "К сожалению по вашему запросу ничего не найдено.";
    }
  }

  return (
    <section className={(loading || (!loading && articles && articles.length === 0)) ? "information information_active" : "information"}>
      <div className={handleType()}/>
      <span className={handleTitle()}>Ничего не найдено</span>
      <span className="information__subtitle">{handleText()}</span>
    </section>
  )
}

export default Information;