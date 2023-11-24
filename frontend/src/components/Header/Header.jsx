import React from 'react';
import './Header.scss'; 
import { Link } from 'react-router-dom';
import logo from '@assets/logo.svg';
import Search from './Search/Search';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Header = () => {
    return (
        <header class="header">
            <div className="header__wrapper">
                <ul className="header__details">
                    <li className="header__item">
                            <Link to="/" className="header__link">
                                <img src={logo} alt="PolyGames Logo Image" className="header__logo" />
                            </Link>
                            <Search/>
                    </li>
                    <li className="header__item">
                            <ThemeSwitcher/>
                            <Link to="/auth" className="profile__link">
                                <p className="profile__login">
                                    Вход
                                </p>
                            </Link>
                            <Link to="/register" className="profile__link">
                                <p className="profile__register">
                                    Регистрация
                                </p>
                            </Link> 
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
