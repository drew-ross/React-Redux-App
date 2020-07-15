import { GET_CARD, GET_NEW_DECK } from '../actions/rootActions';

// draw a card from the API
// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1

const initialState = {
    deckData: {
        success: null,
        deck_id: null,
        shuffled: null,
        remaining: 0
    },
    currentCard: {
        image: null,
        value: '',
        suit: '',
        code: ''
    },
    cardText: '',
    errorMessage: ''
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_DECK:
            return {
                ...state,
                deckData: action.payload
            };
        case GET_CARD:
            return {
                ...state,
                deckData: {
                    ...state.deckData,
                    remaining: action.payload.remaining
                },
                currentCard: action.payload.cards[0]
            };
        default:
            return state;
    }
};