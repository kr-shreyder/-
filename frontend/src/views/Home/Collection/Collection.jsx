import React from 'react';
import './Collection.scss';
import CollectionHead from './Head/Head';
import CollectionBody from './Body/Body';
// import decorateStarMini from '@assets/decorate-star-mini.svg';
const Collection = () => {
    return (
        <section className="collection">
            <CollectionHead />
            <CollectionBody />
        </section>
    );
};

export default Collection;
