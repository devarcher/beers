import React, { Component } from 'react';

class BeerData extends Component {
  state = {
    isLoading: true,
    beer: null
  }
  
  componentDidMount() {
    this.fetchBeers();
  }
  
  async fetchBeers() {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    const filteredBeerData = data.map(beer => (
      {
        id: beer.id,
        name: beer.name,
        tagline: beer.tagline,
        description: beer.description,
        abv: beer.abv,
        ibu: beer.ibu
      }
    ))
    this.setState({ beer: filteredBeerData, isLoading: false })
    console.log('***STATE BEER***' , this.state.beer)
  }

  


  render() {
    return (
    <div>
      {this.state.loading || !this.state.beer ? ( 
        <div>loading ... </div>
      ) : ( 
      <div>
        <div>{this.state.beer[0].name}</div>
      </div>
      )}
    </div>
    );
  }
}

export default BeerData;