import React, { Component } from 'react';
import BeerCard from './components/BeerCard'

import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    beers: null
  }
  
  componentDidMount() {
    this.fetchBeers();
  }
  
  async fetchBeers() {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beers: data, isLoading: false })
    // console.log('***STATE BEER***' , this.state.beer)
  }

  render() {
    return (
    <div>
      {this.state.loading || !this.state.beers ? ( 
        <div>loading ... </div>
      ) : ( 
      <div>
        <div>
          <BeerCard beers={this.state.beers} />
        </div>
      </div>
      )}
    </div>
    );
  }
}

export default App;
