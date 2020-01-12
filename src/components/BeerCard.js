import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faHeart} from '@fortawesome/free-solid-svg-icons';


class BeerCard extends React.Component {
  state = {
    isLiked: false,
    favorites: []
  }

  iconClick(id) {
    const allBeers = this.props.beerData;
    allBeers.forEach((beer => {
      if(beer.id === id) {
        // console.log('*forEach beer.id / id', beer, id)
        
        // this.setState(prevState => ({
        //   favorites: [...prevState.favorites, beer]
        // }))
      }
    }))
  }
  
  render() {
    const { isLiked } = this.state;
    console.log('***Favorites State***', this.state.favorites)
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
          <>
           <FontAwesomeIcon 
            icon={isLiked ? faHeart : faBeer }
            className = 'beerIcon'
            color={isLiked ? '#F44336' : 'rgb(50, 50, 50)'}
            size='3x'
            onClick={() => this.setState({ isLiked: !isLiked })}
           ></FontAwesomeIcon>
           <span>Add To Favorites</span>
          </>
        </div>
      ))}
    </div>
    )
  }
}

export default BeerCard;

