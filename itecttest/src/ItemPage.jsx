import React from 'react';

const ItemPage = (props) => {
    console.log(props);
    return (
        <>
            <div>
                {
                    props.jokes.map((el) => {
                        console.log(props);
                        return <Item jokeID={el.id} jokeText={el.joke} deleteJoke={props.deleteJoke} />
                    })
                }
            </div>
        </>
    );
}

const Item = (props) => {

    let deleteJoke = () => {
        props.deleteJoke(props.jokeID)
    }
    return (
        <>
            <div>
                {props.jokeID}
            </div>
            <div>
                {props.jokeText}
            </div>
            <div>
                <button onClick={deleteJoke}>Delete</button>
            </div>

        </>
    );
}

export default ItemPage;
