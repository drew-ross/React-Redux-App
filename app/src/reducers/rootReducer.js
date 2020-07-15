import { GET_CARD, GET_NEW_DECK, LOG_ERROR, START_GET_DATA } from '../actions/rootActions';
import cardImg from '../img/card-back.png';

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
        image: cardImg,
        value: '',
        suit: '',
        code: ''
    },
    errorMessage: '',
    isFetching: false
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_DECK:
            return {
                ...state,
                deckData: action.payload,
                currentCard: {
                    image: cardImg,
                    value: '',
                    suit: '',
                    code: ''
                },
                errorMessage: '',
                isFetching: false
            };
        case GET_CARD:
            return {
                ...state,
                deckData: {
                    ...state.deckData,
                    remaining: action.payload.remaining
                },
                currentCard: action.payload.cards[0],
                errorMessage: '',
                isFetching: false
            };
        case LOG_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            };
        case START_GET_DATA:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state;
    }
};