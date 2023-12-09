import React from 'react';
import './GamesItem.scss'
import banner3 from '@assets/cover-game6.png'

function GamesItem() {
    return (  
        <li className="list__card">
            <div className="card__content">
                <img src={banner3} alt="Изображение игры" className='card__cover' />
                <div className="card__text">
                    <h4 className="card__title">Wall to wall</h4>
                    <p className="card__desc">Решайте головоломки с перемещением блоков.</p>
                </div>
            </div>
        </li>
    );
}

export default GamesItem;