import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/iamges/logo.png';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        isMenuOpen
      )
        setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <div className="logo-text">
          <b>DUBAI</b>
          <b>DESERT</b>
          <b>SAFARI</b>
        </div>
      </Link>

      <nav ref={navRef}>
        <div className="nav-menu">
          {isMenuOpen ? (
            <i className="bi bi-x-lg" onClick={() => setIsMenuOpen(false)}></i>
          ) : (
            <i className="bi bi-list" onClick={() => setIsMenuOpen(true)}></i>
          )}
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'open' : 'closed'}`}>
          <li className="item">
            <Link className="nav-link" to="/" onClick={closeMenu}>
              <i className="bi bi-house-fill"></i>
              Home
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/about" onClick={closeMenu}>
              <i className="bi bi-bank2"></i>
              About
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/login" onClick={closeMenu}>
              <i className="bi bi-arrow-right-square-fill"></i>
              Login
            </Link>
          </li>

          <li className="item">
            <Link className="nav-link" to="/register" onClick={closeMenu}>
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
