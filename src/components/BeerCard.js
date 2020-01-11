import React from 'react';

const BeerCard = ({ beers }) => {
  return (
    <div>
      {beers.map((beer => 
      <h5>{beer.name}</h5>
      ))}
    </div>
    )
}

export default BeerCard;

  // beers.map(beer => ( 
  //   {
  //     id: beer.id,
  //     name: beer.name,
  //     tagline: beer.tagline,
  //     description: beer.description,
  //     abv: beer.abv,
  //     ibu: beer.ibu
  //   }
  // ))
