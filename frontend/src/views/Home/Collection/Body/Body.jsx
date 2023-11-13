import React from 'react';
import './Body.scss';
import internet from '@assets/internet.svg'
import CardCollection from './Card/Card';

const CollectionBody = () => {
    return (
        <div className="collection__body">
            <div className="collection__info">
                <div className="collection__caption">
                    <div className="collection__up-caption">
                        <h2 className="collection__title">Цифровая витрина</h2>
                        <img src={internet} alt="Decorate Icon" className="collection__icon" />
                    </div>
                    <div className="collection__down-caption">
                        <p className="collection__number">02</p>
                        <h2 className="collection__title">ваших достижений</h2>
                    </div>
                </div>
                <p className="collection__desc">
                    Заполните <span className="collection__desc--highlight">форму для отправки проекта</span>, после модерации ваша игра появится в каталоге и будет <span className="collection__desc--highlight">доступна всем</span>
                </p>
            </div>
            <ul className="collection__cards">
                <li className="collection__card">
                    <CardCollection version='standart' />
                </li>
                <li className="collection__card">
                    <CardCollection version='solid' />
                </li>
                <li className="collection__card">
                    <CardCollection version='mini' />
                    <CardCollection version='catalog' />
                </li>
            </ul>
        </div>
    );
};

export default CollectionBody;
