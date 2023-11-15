import React from 'react';
import './Genre.scss';
import ListGenres from './ListGenres/ListGenres.jsx';
import GamesSlider from './GamesSlider/GamesSlider.jsx';
const Genre = () => {
    return (
        <section id="genre" className="genre">
            <div className="genre__caption">
                <div className="genre__up-caption">
                    <h2 className="genre__title">Самые популярные</h2>
                </div>
                <div className="genre__down-caption">
                    <p className="genre__number">03</p>
                    <h2 className="genre__title">игры разных жанров</h2>
                </div>
            </div>
            <div className="genre__body">
                <ListGenres />
                <GamesSlider />
            </div>
        </section>
    );
};

export default Genre;
