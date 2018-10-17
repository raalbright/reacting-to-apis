import { polyfill } from "es6-promise";
import "isomorphic-fetch";
import React, { Component, Fragment } from "react";

import Card from "./components/Card";

polyfill();

class App extends Component {

  state = {
    resources: [],
    resourceType: '',
    isLoading: false,
    error: false
  };


  loadFilms = () => {
    this.setState( {
      isLoading: true
    } );
    fetch( 'https://ghibliapi.herokuapp.com/films' )
      .then( response => response.json() )
      .then( resources => this.setState( ( state ) => ( {
        resources,
        isLoading: false,
        resourceType: 'movie'
      } ) ) )
      .catch( () => this.setState( () => ( {
        error: true
      } ) ) );
  }

  loadPeople = () => {
    this.setState( {
      isLoading: true
    } );
    fetch( 'https://ghibliapi.herokuapp.com/people' )
      .then( response => response.json() )
      .then( resources => this.setState( ( state ) => ( {
        resources,
        isLoading: false,
        resourceType: 'person'
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
          <input type="button" className="btn btn-primary mb-4 mr-2" value="Load Films" onClick={ this.loadFilms } />
          <input type="button" className="btn btn-primary mb-4" value="Load People" onClick={ this.loadPeople } />
          { ( this.state.error )
            ? <p>Error. Could not fetch movies.</p>
            : ( this.state.isLoading )
              ? <p>...Loading</p>
              : this.state.resources.map( resource => (
                ( this.state.resourceType === 'movie' )
                  ? <Card type={ this.state.resourceType }
                    key={ resource.id }
                    title={ this.state.title }
                    description={ resource.description }
                    producer={ resource.producer }
                    director={ resource.director } />
                  : <Card type={ this.state.resourceType }
                    key={ resource.id }
                    name={ resource.name }
                    age={ resource.age }
                    gender={ resource.gender }
                    url={ resource.url } />
              ) )
          }
        </div>
      </Fragment >
    )
  }
}

export default App;
