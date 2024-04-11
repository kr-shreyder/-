import React, { useEffect } from 'react';
import Preview from './Preview/Preview';
import './AboutUs.scss';
import WeAre from './WeAre/WeAre';
const AboutUs = ({ setIsFooterVisible }) => {
    useEffect(() => {
        setIsFooterVisible(true);
    }, [])

    return (
        <main className='about-us__wrapper'>
            <Preview />
            <WeAre />
        </main>
    );
};

export default AboutUs;