import React from 'react';
import './Hero.scss';
import decorateStarMini from '@assets/decorate-star-mini.svg';
import cover from '@assets/cover-game1.png';
import arrows from '@assets/arrows.svg';
import lines from '@assets/lines.svg';
import photo from '@assets/photo-hero.png';
import plus from '@assets/plus-circle.svg';
import gamepad from '@assets/gamepad.svg';
import star from '@assets/decorate-star.svg';
import ad1 from '@assets/ad-purple.png';
import ad2 from '@assets/ad-pazle.png';
import ad3 from '@assets/ad-player.png';
import games from '@assets/games-list.png'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__head">
                <div className="hero__tools">
                    <nav className="hero__navigate navigate">
                        <img src={decorateStarMini} alt="Decorate Star" className="navigate__decoration" />
                        <ul className="navigate__list">
                            <li className="navigate__item">
                                <a href="/" className="navigate__link navigate__link--active">Главная</a>
                            </li>
                            <li className="navigate__item">
                                <a href="#popular" className="navigate__link">Популярное</a>
                            </li>
                            <li className="navigate__item">
                                <a href="/" className="navigate__link">О нас</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="hero__last-update last-update">
                        <img src={cover} alt="" className="last-update__cover" />
                        <div className="last-update__details">
                            <div className="last-update__info">
                                <h3 className="last-update__title">Veles Day</h3>
                                <p className="last-update__desc">upd. 2 час назад</p>
                            </div>
                            <a href="/" className="last-update__link">
                                <p className="last-update__open">Открыть</p>
                                <div className="last-update__circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" className="last-update__arrow">
                                        <path d="M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z" fill="white"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero__info">
                    <h1 className="hero__title">Публикуйся</h1>
                    <h1 className="hero__title">обсуждай проекты</h1>
                    <h1 className="hero__title"><span className='hero__title hero__title--highlighted'>продвигай</span> свои игры</h1>
                    <div className="hero__details">
                        <img src={arrows} alt="Hero Arrows Decorate" className="hero__arrows" />
                        <p className="hero__desc">Расскажите о <span className="hero__desc hero__desc--highlighted">своих проектах</span>, <span className="hero__desc hero__desc--highlighted">оценивайте</span> работы коллег, и объединяйтесь в <span className="hero__desc hero__desc--highlighted">команды</span></p>
                    </div>
                </div>
            </div>
            <ul className="hero__cards">
                <li className="hero__card">
                    <div className="hero__ad">
                        <div className="hero__ad-line">
                            <p className="hero__adtext">Делитесь</p>
                            <img src={plus} alt="Decorate plus in circle" className="hero__adplus" />
                        </div>
                        <div className="hero__ad-line">
                            <img src={plus} alt="Decorate plus in circle" className="hero__adplus" />
                            <p className="hero__adtext">Оценивайте</p>
                        </div>
                        <div className="hero__ad-line">
                            <p className="hero__adtext">Сотрудничайте</p>
                        </div>
                    </div>
                </li>
                <li className="hero__card">
                    <img src={star} alt="Decorate star" className="hero__star" />
                </li>
                <li className="hero__card hero__card--bigger">
                    <img src={photo} alt="Photo for Hero card" className="hero__photo" />
                    <img src={lines} alt="Lines decorated Hero card" className="hero__lines" />
                </li>
                <li className="hero__card">
                    <img src={ad1} alt="Decorate poster" className="hero__cover" />
                </li>
                <li className="hero__card">
                    <img src={gamepad} alt="Decorate gamepad" className="hero__gamepad" />
                </li>
                <li className="hero__card">
                    <img src={ad2} alt="Decorate poster" className="hero__cover" />
                </li>
                <li className="hero__card">
                    <img src={ad3} alt="Decorate poster" className="hero__cover" />
                </li>
                <li className="hero__card hero__card--higher">
                    <p className="hero__about"><span className="hero__about hero__about--highlighted">Подписывайтесь</span> на самых интересных разработчиков, чтобы получать их игровые новинки самыми первыми</p>
                    <img src={games} alt="Decorate images covers by games" className="hero__games" />
                </li>
            </ul>
        </section>
    );
};

export default Hero;
