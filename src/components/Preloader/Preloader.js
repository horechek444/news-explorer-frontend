import React from "react";
import './Preloader.css'

const Preloader = () => {
  return (
    <section className="preloader">
      <i className="preloader__circle"/>
      <span className="preloader__title">Идет поиск новостей...</span>
    </section>
  )
}

export default Preloader;