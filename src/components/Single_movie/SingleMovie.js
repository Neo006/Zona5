import React from 'react';
import s from './singleMovie.module.css';
import {NavLink} from "react-router-dom";

const SingleMovie = (props) => {
    return (
        <div className="container">
            <div className={`row ${s.movieContainer}`}>
                <NavLink to="/movies" className={`btn btn-primary ${s.backButton}`}>&#8592; go back</NavLink>
                <div className="col-md-12">
                    <img src={props.movie.Poster} alt="poster"/>
                    <h2>{props.movie.Title}</h2>
                </div>
                <div className="col-md-12 text-left mt-5">
                    <p className={`mb-0 ${s.imdbInfo}`}>IMDB: {props.movie.imdbRating}</p>
                    <p className="mb-0">Year: {props.movie.Year}</p>
                    <p className="mb-0">Country: {props.movie.Country}</p>
                    <p className="mb-0">Runtime: {props.movie.Runtime}</p>
                    <p className="mb-0">Director: {props.movie.Director}</p>
                    <p>Actors: {props.movie.Actors}</p>
                    <p>{props.movie.Plot}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleMovie;