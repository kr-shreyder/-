import './ThemeSwitcher.scss'
import React, {useState} from 'react'
import {useTheme} from "@/hooks/useTheme";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }
    // const [status, setStatus] = useState('dark');
    return (
        <div className='theme-switcher'>
            <button onClick={handleDarkThemeClick} className={theme=='dark'?'theme-switcher__btn theme-switcher__btn--active':'theme-switcher__btn'} >
                Темная
            </button>
            <button onClick={handleLightThemeClick} className={theme=='light'?'theme-switcher__btn theme-switcher__btn--active':'theme-switcher__btn'}>
                Светлая
            </button>
        </div>
    );
};

export default ThemeSwitcher;