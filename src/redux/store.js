import {applyMiddleware, combineReducers, createStore} from "redux";
import moviesReducer from "./movies-reducer";
import singleMovieReducer from "./singleMovie-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    moviesPage: moviesReducer,
    singleMoviePage: singleMovieReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;