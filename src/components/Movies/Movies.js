import React from 'react';
import s from './movies.module.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

let SearchMovie = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8 mb-2">
                <form onSubmit={props.handleSubmit}>
                    <div className="input-group mb-3">
                        <Field component="input" name="movie" type="text" className="form-control" placeholder="Search Movie" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

SearchMovie = reduxForm({form: 'search'})(SearchMovie);

const Movies = (props) => {
    if (!props.movies.Response || props.movies.Response === "False") {
        return (
            <div className="container">
                <SearchMovie onSubmit={props.searchMovie}/>
                <div className={s.notFound}>{props.movies.Error}</div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <SearchMovie onSubmit={props.searchMovie}/>
                <div className={`row ${s.allMovies}`}>
                    {
                        props.movies.Search.map(m => (
                            <div key={m.imdbID} className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4 ${s.movie}`}>
                                <NavLink to={'/singleMovie/' + m.imdbID}>
                                    <img src={m.Poster} alt="poster"/>
                                    <h4>{m.Title}</h4>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Movies;