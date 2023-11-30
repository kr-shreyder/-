import React from 'react';
import './MenuButton.scss';

const MenuButton = ({clickButton}) => {
    return (
        <button onClick={clickButton} className="menu-button">
            <svg className="menu-button__icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="25" fill="#2F2F2F"/>
                <path d="M16.5 19.5H34.5" stroke="#EFEFED" strokeWidth="1.88679" strokeLinecap="round"/>
                <path d="M16.5 25.1602H34.5" stroke="#EFEFED" strokeWidth="1.88679" strokeLinecap="round"/>
                <path d="M16.5 30.8208H34.5" stroke="#EFEFED" strokeWidth="1.88679" strokeLinecap="round"/>
            </svg>
        </button>
    );
};

export default MenuButton;