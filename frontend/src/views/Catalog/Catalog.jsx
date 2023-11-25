import React from 'react';
import './Catalog.scss'
import AdSlider from './AdSlider/AdSlider';
function Catalog() {
    return (  
        <main className="catalog">
            <div className="catalog__wrapper">
                <AdSlider />
            </div>
        </main>
    );
}

export default Catalog;