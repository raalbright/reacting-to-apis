import { polyfill } from "es6-promise";
import "isomorphic-fetch";
import React, { Component, Fragment } from "react";

import MovieCard from "./components/MovieCard";

polyfill();

class App extends Component {

  state = {
    movies: [],
    isLoading: false,
    error: false
  };


  handleClick = () => {
    this.setState( {
      isLoading: true
    } );
    fetch( 'https://ghibliapi.herokuapp.com/films' )
      .then( response => response.json() )
      .then( movies => this.setState( ( state ) => ( {
        movies,
        isLoading: false
      } ) ) )
      .catch( () => this.setState( () => ( {
        error: true
      } ) ) );
  }

  render () {
    return (
      <Fragment>
        <div className="container">
          <h1 className="text-center">Ghibli API</h1>
          <input type="button" className="btn btn-primary mb-4" value="Load Films" onClick={ this.handleClick } />
          { ( this.state.error )
            ? <p>Error. Could not fetch movies.</p>
            : ( this.state.isLoading )
              ? <p>...Loading</p>
              : this.state.movies.map( movie => (
                <MovieCard key={ movie.id }
                  title={ movie.title }
                  description={ movie.description }
                  producer={ movie.producer }
                  director={ movie.director } />
              ) )
          }
        </div>
      </Fragment >
    )
  }
}

export default App;
