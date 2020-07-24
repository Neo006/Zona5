import {moviesAPI} from "../api/api";
const SET_MOVIES = 'SET_MOVIES';

let initialState = {
    movies: {
        Response: false,
        Search: []
    },
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {...state, movies: action.movies};
        default:
            return state;
    }
}

const setMovies = (movies) => ({type: SET_MOVIES, movies});

export const getMovies = (title) => {
    return (dispatch) => {
        moviesAPI.getMovies(title)
            .then(data => {
                dispatch(setMovies(data));
            });
    }
}

export default moviesReducer;