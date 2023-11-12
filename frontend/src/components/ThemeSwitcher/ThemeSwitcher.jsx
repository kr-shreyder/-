import './ThemeSwitcher.scss'
import React from 'react'

const ThemeSwitcher = () => {    
    return (
        <div className='theme-switcher'>
            <button className='theme-switcher__btn'>
                Тёмная
            </button>
            <button className='theme-switcher__btn'>
                Светлая
            </button>
        </div>
    );
};

export default ThemeSwitcher;