import React from 'react';
import BeerCardSingles from './BeerCardSingles'

const BeerCardGroup = (props) => {
  
  const { beerData } = props
  console.log(beerData);

    return (
      <div>
        {beerData.map((beer) => (
          <BeerCardSingles key={beer.id} beerData={ beer } />
        ))}
      </div>
    )
  }


export default BeerCardGroup;

