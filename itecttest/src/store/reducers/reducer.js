import { pageAPI } from "../../api/api";

let initialState = {
    jokes: [
        {
            jokeID: null,
            jokeText: null,
        },
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('setJoke'): {
            return {
                ...state,
                jokes: { ...action.joke }
            }
        }
        default:
            return state
    }
}

let setJoketoState = (data) => ({ type: 'setJoke', joke: data })

export const getData = () => (dispatch) => {
    pageAPI.getData().then(data => {
        dispatch(setJoketoState(data.data.value))  
    })
}