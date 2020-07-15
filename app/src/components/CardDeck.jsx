import React from 'react';
import { connect } from 'react-redux';
import { getCard, getNewDeck } from '../actions/rootActions';

import CurrentCard from './CurrentCard';
import DrawCardButton from './DrawCardButton';

const CardDeck = props => {

    return (
        <div className="CardDeck">
            <button onClick={props.getNewDeck}>Get New Deck</button>
            <DrawCardButton 
            getCard={props.getCard} 
            remaining={props.deckData.remaining}
            deckId={props.deckData.deck_id}
            />
            <CurrentCard currentCard={props.currentCard} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        deckData: state.deckData,
        currentCard: state.currentCard,
        cardText: state.cardText,
        errorMessage: state.errorMessage
    };
};

export default connect(mapStateToProps, { getCard, getNewDeck })(CardDeck);