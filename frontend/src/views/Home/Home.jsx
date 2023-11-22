import React from 'react';
import './Home.scss';
import Hero from './Hero/Hero.jsx';
import Collection from './Collection/Collection.jsx';
import Genre from './Genre/Genre.jsx';
import Functions from './Functions/Functions.jsx';
const Home = () => {
    return (
        <main className='home__wrapper'>
            <Hero />
            <Collection />
            <Genre />
            <Functions />
        </main>
    );
};

export default Home;