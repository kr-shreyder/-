import React from 'react';
import './Home.scss';
import Hero from './Hero/Hero.jsx';
import Collection from './Collection/Collection.jsx';

const Home = () => {
    return (
        <main className='home__wrapper'>
            <Hero />
            <Collection />
        </main>
    );
};

export default Home;