import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer } from './reducers/reducer';
import thunk from 'redux-thunk'

const reducersBatch = combineReducers({
    reducer,
})



const store = createStore(reducersBatch, applyMiddleware(thunk))

window.state = store

export default store