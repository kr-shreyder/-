import React from 'react';
import './Button.scss';
import arrow from '@assets/arrow2.svg';

const Button = ({ text }) => {
    return (
        <button className='styled-button'>
            <img
                src={arrow}
                alt='Arrow'
                className='styled-button__arrow'
            />
            { text }
        </button>
    );
};

export default Button;
