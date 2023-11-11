import React from 'react';
import './Header.scss'; 
import logo from '../../assets/logo.svg';
import Search from './Search/Search';

const Header = () => {
    return (
        <header class="header">
            <ul className="header__details">
                <li className="header__item">
                    <a href="/" className="header__link">
                        <img src={logo} alt="PolyGames Logo Image" className="header__logo" />
                    </a>
                </li>
                <li className="header__item">
                    <Search />
                </li>
            </ul>
        </header>
    );
};

export default Header;
