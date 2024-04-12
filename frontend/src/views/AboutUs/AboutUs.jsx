import React, { useEffect } from 'react';
import Preview from './Preview/Preview';
import './AboutUs.scss';
import WeAre from './WeAre/WeAre';
import CanDo from './CanDo/CanDo';
import ForDevelopers from './ForDevelopers/ForDevelopers';
const AboutUs = ({ setIsFooterVisible }) => {
    useEffect(() => {
        setIsFooterVisible(true);
    }, [])

    return (
        <main className='about-us__wrapper'>
            <Preview />
            <WeAre />
            <CanDo />
            <ForDevelopers />
        </main>
    );
};

export default AboutUs;