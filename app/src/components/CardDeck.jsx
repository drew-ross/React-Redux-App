import React from 'react';
import { connect } from 'react-redux';
import { drawCard, getNewDeck } from '../actions/rootActions';

const CardDeck = props => {
    return (
        <div className="CardDeck">
            <h2>deck</h2>
            <button onClick={props.getNewDeck}>Get New Deck</button>
            {props.deckData.deck_id && <p>{props.deckData.deck_id}</p>}
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

export default connect(mapStateToProps, { drawCard, getNewDeck })(CardDeck);