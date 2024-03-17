import React from 'react';
import './AsideSettings.scss'
import starMini1 from '@assets/decorate-star-mini.svg'
import starMini2 from '@assets/decorate-star-mini2.svg'

const genres = [
    {
        name: 'Шутеры',
        url: '/',
    },
    {
        name: 'Карточные',
        url: '/',
    },
    {
        name: 'Стратегии',
        url: '/',
    },
    {
        name: 'Приключения',
        url: '/',
    },
    {
        name: 'Ролевые',
        url: '/',
    },
    {
        name: 'Пазлы',
        url: '/',
    },
    {
        name: 'Спорт',
        url: '/',
    },
    {
        name: 'Экшены',
        url: '/',
    },
]
const kits = [
    {
        name: 'Рейтинг',
        url: '/',
    },
    {
        name: 'Просмотры',
        url: '/',
    },
    {
        name: 'Отзывы',
        url: '/',
    },
    {
        name: 'MosPolyJam',
        url: '/',
    },
    {
        name: 'Последние',
        url: '/',
    },
    {
        name: 'Windows',
        url: '/',
    },
    {
        name: 'Web',
        url: '/',
    },
    {
        name: 'Mobile',
        url: '/',
    },
]

function AsideSettings() {
    return (  
        <aside className="aside-settings">
            <div className="aside-settings__lists">
                <ul className="aside-settings__list">
                    <img src={starMini1} alt="" className="aside-settings__icon" />
                    <li className="aside-settings__item">
                        <h5 className="aside-settings__title">Жанры</h5>
                    </li>
                    {genres.map((item, index) => (
                        <li className="aside-settings__item" key={index}>
                            <a href={item.url} className="aside-settings__link">{item.name}</a>
                        </li>
                    ))}
                </ul>
                <ul className="aside-settings__list">
                    <img src={starMini2} alt="" className="aside-settings__icon" />
                    <li className="aside-settings__item">
                        <h5 className="aside-settings__title">Наборы</h5>
                    </li>
                    {kits.map((item, index) => (
                        <li className="aside-settings__item" key={index}>
                            <a href={item.url} className="aside-settings__link">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default AsideSettings;