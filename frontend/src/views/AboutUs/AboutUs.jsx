import React, { useEffect } from 'react';
import Preview from './Preview/Preview';
import './AboutUs.scss';
const AboutUs = ({ setIsFooterVisible }) => {
    useEffect(() => {
        setIsFooterVisible(true);
    }, [])

    return (
        <main className='about-us__wrapper'>
            <Preview />
        </main>
    );
};

export default AboutUs;