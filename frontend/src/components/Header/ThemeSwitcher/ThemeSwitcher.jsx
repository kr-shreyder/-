import './ThemeSwitcher.scss'
import React, {useState} from 'react'

const ThemeSwitcher = () => {
    const [status, setStatus] = useState('dark');
    return (
        <div className='theme-switcher'>
            <button onClick={() => setStatus('dark')} className={status=='dark'?'theme-switcher__btn theme-switcher__btn--active':'theme-switcher__btn'} >
                Темная
            </button>
            <button onClick={() => setStatus('light')} className={status=='light'?'theme-switcher__btn theme-switcher__btn--active':'theme-switcher__btn'}>
                Светлая
            </button>
        </div>
    );
};

export default ThemeSwitcher;