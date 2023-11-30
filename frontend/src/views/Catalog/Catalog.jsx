import React from 'react';
import './Catalog.scss'
import AdSlider from './AdSlider/AdSlider';
import AsideSettings from './AsideSettings/AsideSettings';
function Catalog() {
    return (  
        <main className="catalog">
            <div className="catalog__wrapper">
                <AsideSettings />
                <AdSlider />
            </div>
        </main>
    );
}

export default Catalog;