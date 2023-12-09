import React from 'react';
import './Catalog.scss'
import AdSlider from './AdSlider/AdSlider';
import AsideSettings from './AsideSettings/AsideSettings';
import GamesList from './GamesList/GamesList';
function Catalog() {
    return (  
        <main className="catalog">
            <AsideSettings />
            <div className="catalog__wrapper">
                <AdSlider />
                <GamesList/>
                <GamesList/>
                <GamesList/>
            </div>
        </main>
    );
}

export default Catalog;