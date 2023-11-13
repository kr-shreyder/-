import React from 'react';
import './Card.scss';
import cover from '@assets/cover-game2.png'


const CardCollection = () => {
    return (
        <div className="collection__card-game card-game">
            <img src={cover} alt="Cover for game" className="card-game__cover" />
            <div className="card-game__info">
                <h3 className="card-game__title">В объективе!</h3>
                <p className="card-game__desc">Вы - блогер, путешествующий по России. Создавайте впечатляющие фотографии, изучайте новые места для путешествий!</p>
            </div>
            <a href="/" className="card-game__link">
                <p className="card-game__more">Подробнее</p>
                <svg className="card-game__arrow" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="25" fill="#FF5731"/>
                    <path d="M32.4642 18.6363C32.4642 18.0288 31.9717 17.5363 31.3642 17.5363L21.4642 17.5363C20.8566 17.5363 20.3642 18.0288 20.3642 18.6363C20.3642 19.2438 20.8566 19.7363 21.4642 19.7363L30.2642 19.7363L30.2642 28.5363C30.2642 29.1438 30.7566 29.6363 31.3642 29.6363C31.9717 29.6363 32.4642 29.1438 32.4642 28.5363L32.4642 18.6363ZM19.414 32.1421L32.142 19.4142L30.5863 17.8585L17.8584 30.5864L19.414 32.1421Z" fill="white"/>
                </svg>
            </a>
        </div>
    );
};

export default CardCollection;
