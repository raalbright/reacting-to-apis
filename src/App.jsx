import { polyfill } from "es6-promise";
import "isomorphic-fetch";
import React, { Component, Fragment } from "react";

import MovieCard from "./components/MovieCard";

polyfill();

class App extends Component {

  state = {
    movies: [],
    isLoading: true,
    error: false
  };

  componentDidMount () {
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

  handleClick = event => {
    event.preventDefault();
    console.dir( event.target );
  }

  render () {
    return (
      <Fragment>
        <div className="container">
          <h1 className="text-center">Ghibli API</h1>
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
