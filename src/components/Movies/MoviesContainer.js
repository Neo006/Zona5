import React from 'react';
import {connect} from "react-redux";
import Movies from "./Movies";
import {getMovies} from "../../redux/movies-reducer";

class MoviesContainer extends React.Component {

    componentDidMount() {
        this.props.getMovies(this.getData());
    }

    searchMovie(title) {
        this.setData(title);
        this.props.getMovies(title.movie);
    }

    setData(title) {
        let obj = {name: title};
        sessionStorage.setItem('movie', JSON.stringify(obj));
    }

    getData() {
        let data = sessionStorage.getItem('movie');
        data = JSON.parse(data);
        if(data)
            return data.name.movie;
        else
            return 'The lord of the rings';
    }

    render() {
        return (
            <Movies movies={this.props.movies}
                    searchMovie={this.searchMovie.bind(this)}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movies: state.moviesPage.movies,
    }
}

export default connect(mapStateToProps,{getMovies})(MoviesContainer);