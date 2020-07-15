import axios from 'axios';

export const DRAW_CARD = 'DRAW_CARD';
export const START_GET_NEW_DECK = 'START_GET_NEW_DECK';
export const GET_NEW_DECK = 'GET_NEW_DECK';
export const LOG_ERROR = 'LOG_ERROR';

//deck of cards api
const API_URL = 'https://deckofcardsapi.com/api/deck/new/';

export const drawCard = () => {
    return { type: DRAW_CARD };
};

export const getNewDeck = () => dispatch => {
    dispatch({ type: START_GET_NEW_DECK });
    axios.get(API_URL)
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_NEW_DECK, payload: res.data });
        })
        .catch(err => dispatch({ type: LOG_ERROR, payload: err }));
};