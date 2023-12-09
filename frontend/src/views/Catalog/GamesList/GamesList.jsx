import React from 'react';
import { Link } from 'react-router-dom';
import './GamesList.scss'
import GamesItem from './GamesItem/GamesItem';

function GamesList() {
    return ( 
        <section className="games__list">
            <div className="list__head">
                <h3 className="games__header">Лучшие представители своих жанров</h3>
                <Link to="/" className="games__show">
                    Показать все
                </Link>
            </div>
            <ul className="list__body">
                <GamesItem/>
                <GamesItem/>
                <GamesItem/>
                <GamesItem/>
                <GamesItem/>
                <GamesItem/>
            </ul>
            
        </section>
     );
}

export default GamesList;