import React from 'react';
import './Search.scss';
import searchIcon from '@assets/search-icon.svg';

const SearchBar = () => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Поиск по играм"
                className="search__input"
            />
            <svg className="search__icon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.3535" cy="10.5" r="9.5"/>
                <path d="M16.8535 17.5L19.8535 20.5" stroke-linecap="round"/>
            </svg>

        </div>
    );
};

export default SearchBar;