import { pageAPI } from "../../api/api";

let initialState = {
    jokes: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('setJoke'): {
            console.log(action);
            return {
                ...state,
                jokes: [...action.joke]
            }
        }
        case ('deleteJoke'): {
            let list = [...state.jokes]
            let filterredList = list.filter(item => action.id !== item.id)
            return {
                state,
                jokes: [...filterredList]
            }
        }
        default:
            return state
    }
}

let setJoketoState = (data) => ({ type: 'setJoke', joke: [...data] })

export let deleteJoke = (id) => ({ type: 'deleteJoke', id })

export const getData = () => (dispatch) => {
    pageAPI.getData().then(data => {
        console.log(...data.data.value);
        dispatch(setJoketoState(data.data.value))
    })
}