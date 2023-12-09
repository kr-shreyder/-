import React from 'react';
import './GamesItem.scss'

function GamesItem({name, desc, cover}) {
    return (  
        <li className="list__card">
            <div className="card__content">
                <img src={cover} alt="Изображение игры" className='card__cover' />
                <div className="card__text">
                    <h4 className="card__title">{name}</h4>
                    <p className="card__desc">{desc}</p>
                </div>
            </div>
        </li>
    );
}

export default GamesItem;