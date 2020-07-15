import React from 'react';
import { connect } from 'react-redux';
import { getCard, getNewDeck } from '../actions/rootActions';

import CurrentCard from './CurrentCard';
import DrawCardButton from './DrawCardButton';
import Messages from './Messages';

const CardDeck = props => {

    return (
        <div className="CardDeck">
            <Messages isFetching={props.isFetching} errorMessage={props.errorMessage} />
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
        errorMessage: state.errorMessage,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, { getCard, getNewDeck })(CardDeck);