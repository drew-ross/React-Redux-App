import React from 'react';

const Messages = ({ isFetching, errorMessage }) => {

    return (
        <div className='Messages'>
            {isFetching && <p className='fetching-message'>Getting card data...</p>}
            {errorMessage !== '' && <p className='error-message'>Error getting data: {errorMessage}</p>}
        </div>

    );
};

export default Messages;