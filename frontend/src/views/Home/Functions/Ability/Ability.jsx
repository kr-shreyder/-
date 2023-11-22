import React from 'react';
import './Ability.scss';

const Ability = ({ data }) => {
    const { title, number, desc, url, image } = data;

    return (
        <a href={url} className="functions__ability ability">
            <div className="ability__info">
                <p className="ability__number">{number}</p>
                <h3 className="ability__title">{title}</h3>
            </div>
            {image && <img src={image} alt="Cover for ability" className={number==4?'ability__image ability__image--avatar':number==1?'ability__image ability__image--all':'ability__image'} />}
            <div className="ability__action">
                <p className="ability__desc">{desc}</p>
                <svg className="ability__icon" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M25.5 18.4167V26.9167C25.5 27.6681 25.2015 28.3888 24.6701 28.9201C24.1388 29.4515 23.4181 29.75 22.6667 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V11.3333C4.25 10.5819 4.54851 9.86122 5.07986 9.32986C5.61122 8.79851 6.33189 8.5 7.08333 8.5H15.5833" stroke="#ADADAC" stroke-width="2.83333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.25 4.25H29.75V12.75" stroke="white" stroke-width="2.83333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.1665 19.8333L29.7498 4.25" stroke="white" stroke-width="2.83333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </a>
    );
};

export default Ability;