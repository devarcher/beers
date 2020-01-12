import React, { Component } from 'react';
import BeerCard from './components/BeerCard'

import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    beers: null,
    isLiked: null
  }
  
  componentDidMount() {
    this.fetchBeers();
  }
  
  async fetchBeers() {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const filteredBeers = data.map(beer => ( 
    {
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      abv: beer.abv,
      ibu: beer.ibu,
      image: beer.image_url
    }
  ))
    this.setState({ beers: filteredBeers, isLoading: false })
    // console.log('***STATE BEER***' , this.state.beers)
  }

  render() {
    return (
    <div>
      {this.state.loading || !this.state.beers ? ( 
        <div>loading ... </div>
      ) : ( 
      <div>
        <div>
          <BeerCard beerData={this.state.beers} liked={this.state.isLiked}/>
        </div>
      </div>
      )}
    </div>
    );
  }
}

export default App;
