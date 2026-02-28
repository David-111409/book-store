import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/iamges/logo.png';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="logo-text">
          <b>DUBAI</b>
          <b>DESERT</b>
          <b>SAFARI</b>
        </div>
      </div>

      <nav>
        <div className="nav-menu">
          {isMenuOpen ? (
            <i className="bi bi-x-lg" onClick={() => setIsMenuOpen(false)}></i>
          ) : (
            <i className="bi bi-list" onClick={() => setIsMenuOpen(true)}></i>
          )}
        </div>
        <ul className={`nav-list ${isMenuOpen ? ' open' : ' closed'}`}>
          <li className="item">
            <Link className="nav-link" to="/">
              <i className="bi bi-house-fill"></i>
              Home
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/about">
              <i className="bi bi-bank2"></i>
              About
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/books">
              <i className="bi bi-arrow-right-square-fill"></i>
              Login
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/register">
              <i className="bi bi-person-plus-fill"></i>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
