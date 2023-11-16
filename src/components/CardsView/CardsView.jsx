import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from '../ShopCard/ShopCard';
import './CardsView.css';

function CardsView(props) {
    const { cards, viewMode } = props;

    return (
        <div className={`cards${viewMode === 'module' ? ' cards-module' : ''}`}>
            {cards.map((card,index) => <ShopCard key={index} card={card} viewMode={viewMode}/>)}
        </div>
    )
}

CardsView.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.string,
            color: PropTypes.string,
            img: PropTypes.string,
        })
    ).isRequired,
}

export default CardsView
