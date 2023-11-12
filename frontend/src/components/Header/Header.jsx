import React from 'react';
import './Header.scss'; 
import logo from '@assets/logo.svg';
import Search from './Search/Search';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
    return (
        <header class="header">
            <div className="header__wrapper">
                <ul className="header__details">
                    <li className="header__item">
                        <a href="/" className="header__link">
                            <img src={logo} alt="PolyGames Logo Image" className="header__logo" />
                        </a>
                    </li>
                    <li className="header__item">
                        <Search />
                    </li>
                    <li className="header__item">
                        <ThemeSwitcher/>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
