import React from 'react';
import './ListGenres.scss';
import SwitcherGenres from './SwitcherGenres/SwitcherGenres.jsx';

const ListGenres = () => {
    return (
        <ul className="genre__list-genres list-genres">
            <li className="list-genres__item">
                <SwitcherGenres active={true}>Приключения</SwitcherGenres>
            </li>
            <li className="list-genres__item">
                <SwitcherGenres>Стратегии</SwitcherGenres>
            </li>
            <li className="list-genres__item">
                <SwitcherGenres>Экшен</SwitcherGenres>
            </li>
            <li className="list-genres__item">
                <SwitcherGenres>Симуляторы</SwitcherGenres>
            </li>
        </ul>
    );
};

export default ListGenres;
