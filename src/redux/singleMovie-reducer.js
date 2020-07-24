import {moviesAPI} from "../api/api";
const SET_MOVIE = 'SET_MOVIE';

let initialState = {
    movie: {}
}

const singleMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE:
            return {...state, movie: action.movie};
        default:
            return initialState;
    }
}

const setMovie = (movie) => ({type: SET_MOVIE, movie});

export const getSingleMovie = (id) => {
    return (dispatch) => {
        moviesAPI.getSingleMovie(id)
            .then(data => {
                dispatch(setMovie(data));
            });
    }
}

export default singleMovieReducer;