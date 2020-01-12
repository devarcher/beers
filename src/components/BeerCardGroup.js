import React from 'react';
import BeerCards from './BeerCardSingles'

class BeerCardGroup extends React.Component {
  
  beerData = this.props.beerData

  render() {
    return (
      <div>
        <BeerCards beerData={this.beerData} />
      </div>
    )
  }
}

export default BeerCardGroup;

