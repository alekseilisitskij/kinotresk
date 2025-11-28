import { Link } from "react-router-dom";
import Logo from "../../../shared/assets/images/kinotresk.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="#">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="#" className="header__link">
                Главная
              </Link>
            </li>
            <li className="header__item">
              <Link to="#" className="header__link">
                Жанры
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__search">
          <input
            type="text"
            placeholder="Поиск"
            className="header__search-input"
          />
        </div>

        <div className="header__auth">
          <button className="header__auth-button">Войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
