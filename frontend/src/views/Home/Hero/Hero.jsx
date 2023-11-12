import React from 'react';
import './Hero.scss';
import decorateStarMini from '@assets/decorate-star-mini.svg';


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__wrapper">
                <div className="hero__tools">
                    <nav className="hero__navigate navigate">
                        <img src={decorateStarMini} alt="Decorate Star" className="navigate__decoration" />
                        <ul className="navigate__list">
                            <li className="navigate__item">
                                <a href="/" className="navigate__link navigate__link--active">Главная</a>
                            </li>
                            <li className="navigate__item">
                                <a href="/" className="navigate__link">Популярное</a>
                            </li>
                            <li className="navigate__item">
                                <a href="/" className="navigate__link">О нас</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        </section>
    );
};

export default Hero;
