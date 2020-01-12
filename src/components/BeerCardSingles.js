import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faHeart } from '@fortawesome/free-solid-svg-icons';

class BeerCardSingles extends React.Component { 
  state = {
    isLiked: false,
    favorites: []
  }

  iconClick(id) {
    
    this.setState({ isLiked: !this.state.isLiked })
    
    const { beerData } = this.props
    console.log(beerData)
    // if(this.state.isLiked === true) {
    //   this.setState(prevState => ({
    //     favorites: [...prevState.favorites, beerData]
    //   }))
    // }
  }
  
  render() {
    const { isLiked } = this.state
    const { beerData } = this.props
    // console.log(beerData)
    // console.log('***Favorites State***', this.state.favorites)
    return ( 
      <div> 
        <div className="card">
          <div className="card-body">
            <div className="groupOne">
              <img src={beerData.image}  className="beerImage" alt=""/>
             <div          className="textGroupOne">
              <h1 className="title">{beerData.name}</h1>
              <h2 className="tagline">{beerData.tagline}</h2>
              <div className="textGroupTwo">
                <p className="desc">{beerData.description}</p>
                <div className="abvAndIbu">
                  <h3 className="abv">ABV: {beerData.abv}</h3>
                  <h3 className="ibu">IBU: {beerData.ibu}</h3>
                </div>
              </div>
              </div>
            </div>
            <div className="favs">
              <span className="favsText">
                {isLiked ? "De-Favorite" : "Favorite"}
                </span>
              <FontAwesomeIcon 
                icon={isLiked ? faHeart : faBeer }
                className = 'beerIcon'
                color={isLiked ? 'rgb(236, 73, 141)' : 'rgb(50, 50, 50)'}
                size='3x'
                onClick={() => this.iconClick(beerData.id)}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerCardSingles;