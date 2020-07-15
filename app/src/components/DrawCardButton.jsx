import React from 'react';

const DrawCardButton = ({ remaining, getCard, deckId }) => {

    return (
        <div className='DrawCardButton'>
            {remaining > 0 ? (
                <button onClick={
                    () => {
                        getCard(
                            `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
                        );
                    }}>Draw New Card</button>
            ) : (
                    <button disabled={true}>Out Of Cards</button>
                )}
            <p>Deck: {remaining}</p>
        </div>
    );
};

export default DrawCardButton;