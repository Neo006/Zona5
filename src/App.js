import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import MoviesContainer from "./components/Movies/MoviesContainer";
import SingleMovieContainer from "./components/Single_movie/SingleMovieContainer";

function App() {
  return (
        <div className="App">
          <Navbar />
          <Redirect to="movies" />
          <Route path="/movies/:movieTitle?" render={(props) => <MoviesContainer {...props}/>} />
          <Route path="/singleMovie/:movieId?" render={(props) => <SingleMovieContainer {...props}/>}/>
        </div>
  );
}

export default App;
