import React from 'react';
import cardImg from '../img/card-back.png';

const CurrentCard = ({ currentCard }) => {

    return (
        <div className='CurrentCard'>
            <img src={currentCard.image} />
            {currentCard.value !== '' && (
                <>
                
                <p>{`${currentCard.value} of ${currentCard.suit}`}</p>
                </>
            )}
        </div>
    );
};

export default CurrentCard;