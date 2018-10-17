import React from "react";

import MovieCard from "./MovieCard";
import PersonCard from "./PersonCard";

const Card = props => (
  ( props.type === 'movie' )
    ? <MovieCard
      title={ props.title }
      description={ props.description }
      producer={ props.producer }
      director={ props.director } />
    : <PersonCard name={ props.name }
      age={ props.age }
      gender={ props.gender }
      url={ props.url } />
);

export default Card;
