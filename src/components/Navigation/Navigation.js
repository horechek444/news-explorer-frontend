import './Navigation.css';

const Navigation = () => {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <a className="navigation__link navigation__link_type_main navigation__link_active" href="#">Главная</a>
      </li>
      <li className="navigation__item">
        <a className="navigation__link navigation__link_type_main" href="#">Сохранённые статьи</a>
      </li>
    </ul>
  )
}

export default Navigation;