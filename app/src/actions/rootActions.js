import axios from 'axios';

export const START_GET_DATA = 'START_GET_DATA';
export const GET_NEW_DECK = 'GET_NEW_DECK';
export const GET_CARD = 'GET_CARD';
export const LOG_ERROR = 'LOG_ERROR';

//deck of cards api
const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

export const getCard = url => dispatch => {
    dispatch({ type: START_GET_DATA });
    axios.get(url)
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_CARD, payload: res.data });
        })
        .catch(err => dispatch({ type: LOG_ERROR, payload: err }));
};

export const getNewDeck = () => dispatch => {
    dispatch({ type: START_GET_DATA });
    axios.get(API_URL)
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_NEW_DECK, payload: res.data });
        })
        .catch(err => dispatch({ type: LOG_ERROR, payload: err }));
};