import React from 'react';
import './Search.scss';
import searchIcon from '../../../assets/search-icon.svg';

const SearchBar = () => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Поиск по играм"
                className="search__input"
            />
            <img src={searchIcon} alt="Иконка поиска" className="search__icon" />
        </div>
    );
};

export default SearchBar;