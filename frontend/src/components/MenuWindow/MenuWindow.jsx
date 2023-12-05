import React, { useState, useEffect } from 'react';
import './MenuWindow.scss';
import { Link, useLocation } from 'react-router-dom';
import bgGrid from '@assets/bg-grid.svg'

const MenuWindow = ({ isOpen, closeMenu }) => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);
  return (
    <div className={`menu-window ${isOpen ? 'menu-window--open' : ''}`}>
      <p className="menu-window__title">Навигация по сайту</p>
      <ul className="menu-window__list">
        <li className="menu-window__item">
            <Link to="/" className={currentPath === "/" ? "menu-window__link menu-window__link--active" : "menu-window__link"}>
                Главная
                <p className="menu-window__number">/01</p>
            </Link>
        </li>
        <li className="menu-window__item">
            <Link to="/games" className={currentPath === "/games" ? "menu-window__link menu-window__link--active" : "menu-window__link"}>
                Каталог игр
                <p className="menu-window__number">/02</p>
            </Link>
        </li>
        <li className="menu-window__item">
            <Link to="/teams" className={currentPath === "/teams" ? "menu-window__link menu-window__link--active" : "menu-window__link"}>
                Команды
                <p className="menu-window__number">/03</p>
            </Link>
        </li>
        <li className="menu-window__item">
            <Link to="/post-form" className={currentPath === "/post-form" ? "menu-window__link menu-window__link--active" : "menu-window__link"}>
                Публикация
                <p className="menu-window__number">/04</p>
            </Link>
        </li>
        <li className="menu-window__item">
            <Link to="/profile" className={currentPath === "/profile" ? "menu-window__link menu-window__link--active" : "menu-window__link"}>
                Мой профиль
                <p className="menu-window__number">/05</p>
            </Link>
        </li>
      </ul>
      <button className="menu-window__button" onClick={closeMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="25" fill="#2F2F2F"/>
            <path d="M19 19L32 32" stroke="#EFEFED" strokeWidth="1.88679" strokeLinecap="round"/>
            <path d="M19 32L32 19" stroke="#EFEFED" strokeWidth="1.88679" strokeLinecap="round"/>
        </svg>
      </button>
      <p className="menu-window__copyright">
        ©2023, Московский политехнический университет
      </p>
      <img src={bgGrid} alt="Grid" className="menu-window__bg" />
    </div>
  );
}

export default MenuWindow;
