import React from 'react';
import './Functions.scss';
import Ability from './Ability/Ability';
import ability1 from '@assets/gamer-cover.gif'
import ability2 from '@assets/ability2.png'
import ability4 from '@assets/avatar2.png'

const Functions = () => {
    return (
        <section className="functions">
            <h1 className="functions__title">Функции PolyGames</h1>
            <ul className="functions__list">
                <li className="functions__item">
                    <Ability data={{ title: 'Каталог игр', number: 1, desc: '123 Игры', url: '#', image: ability1 }} />
                </li>
                <li className="functions__item">
                    <Ability data={{ title: 'Команды', number: 2, desc: '23 Команды', url: '#', image: ability2 }} />
                </li>
                <li className="functions__item">
                    <Ability data={{ title: 'Форма публикации', number: 3, desc: '~5 минут', url: '#', image: false }} />
                </li>
                <li className="functions__item">
                    <Ability data={{ title: 'Мой профиль', number: 4, desc: '4 Игры', url: '#', image: ability4 }} />
                </li>
            </ul>
        </section>
    );
};

export default Functions;