import React, { Component } from "react";
import BeerCardGroup from "./components/BeerCardGroup";

import "./App.css";

class App extends Component {
  state = {
    isLoading: true,
    beers: null
  };

  componentDidMount() {
    this.fetchBeers();
  }

  async fetchBeers() {
    try {
      const url = "https://api.punkapi.com/v2/beers";
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const filteredBeers = data.map(beer => ({
        id: beer.id,
        name: beer.name,
        tagline: beer.tagline,
        description: beer.description,
        abv: beer.abv,
        ibu: beer.ibu,
        image: beer.image_url,
        isLiked: false
      }));
      this.setState({ beers: filteredBeers, isLoading: false });
      // console.log('***STATE BEER***' , this.state.beers)
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.beers ? (
          <div>loading ... </div>
        ) : (
          <div>
            <div>
              <BeerCardGroup beerData={this.state.beers} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

// Added isLiked with the data it will be piggy backed down the chain
// Make onClick Handler at the top level to "Drill Down" into lower level
// Components.  Pass onClick handler down in props to component that needs it. 
// Pass beer.id back up to Top level and put that into a Favorites array.  
// At this point --- [favorites] gets passed down and is mapped over and rendered.