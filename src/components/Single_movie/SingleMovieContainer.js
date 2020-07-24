import React from 'react';
import {connect} from "react-redux";
import SingleMovie from "./SingleMovie";
import {getSingleMovie} from "../../redux/singleMovie-reducer";

class SingleMovieContainer extends React.Component {

    componentDidMount() {
        this.props.getSingleMovie(this.props.match.params.movieId);
    }

    render() {
        return (
            <SingleMovie movie={this.props.movie}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movie: state.singleMoviePage.movie,
    }
}


export default connect(mapStateToProps,{getSingleMovie})(SingleMovieContainer);