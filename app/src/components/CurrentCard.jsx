import React from 'react';

const CurrentCard = ({ currentCard }) => {

    return (
        <div className='CurrentCard'>
            {currentCard.value !== '' && (
                <>
                <img src={currentCard.image} />
                <p>{`${currentCard.value} of ${currentCard.suit}`}</p>
                </>
            )}
        </div>
    );
};

export default CurrentCard;