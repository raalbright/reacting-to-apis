import React from "react";

const PersonCard = ( { name, age, gender, url } ) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{ name }</h5>
      <ul>
        <li>Age: { age }</li>
        <li>Gender: { gender }</li>
      </ul>
      <a href={ url } className="card-link" target="_blank" rel="noopener noreferrer">See more</a>
    </div>
  </div>
);

export default PersonCard;
