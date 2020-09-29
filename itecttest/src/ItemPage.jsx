import React from 'react';

const ItemPage = (props) => {
    return (
        <>
            <div>
                {props.jokeID}
            </div>
            <div>
                {props.jokeText}
            </div>
        </>
    );
}

export default ItemPage;
