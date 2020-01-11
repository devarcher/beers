import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';


class BeerCard extends React.Component {
  state = {
    isLiked: false
  }

  render() {
  return ( 
    <div>
      {this.props.beerData.map((beer) => (
        <div className="card" key={beer.id}>
          <div className="card-body">
            <img src={beer.image} className="beerImage" alt=""/>
            <h1 className="title">{beer.name}</h1>
            <h2 className="tagline">{beer.tagline}</h2>
            <h3 className="abv">{beer.abv}</h3>
            <h3 className="ibu">{beer.ibu}</h3>
            <p className="desc">{beer.description}</p>
          </div>
          <icon>
            <FontAwesomeIcon icon={faBeer}></FontAwesomeIcon>
          </icon>
        </div>
      ))}
    </div>
    )
  }
}

export default BeerCard;

