import React from 'react';
import './Catalog.scss'
import AdSlider from './AdSlider/AdSlider';
import AsideSettings from './AsideSettings/AsideSettings';
import GamesList from './GamesList/GamesList';
import cover1 from '@assets/cover-game4.png'

function Catalog() {

    const gamesCollections = [{
        title: 'Лучшие представители своих жанров',
        games: [
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            }
        ]
    }, 
    {
        title: 'Самое популярное в последнее время',
        games: [
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            }
        ]
    }, 
    {
        title: 'Специально для тебя',
        games: [
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            },
            {
                name: 'Simulation 23/3',
                desc: 'Платформер-головоломка с уровнями на логику и смека...',
                cover: cover1
            }
        ]
    }]
    return (  
        <main className="catalog">
            <AsideSettings />
            <div className="catalog__wrapper">
                <AdSlider />
                {gamesCollections.map((list) => <GamesList title={list.title} games={list.games} key={list.title}/>)}
            </div>
        </main>
    );
}

export default Catalog;