import React, { Component } from 'react';

class BeerData extends Component {
  state = {
    isLoading: true,
  }
  
  componentDidMount() {
    this.fetchBeers();
  }
  
  fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
    <div>
      {this.state.loading ? <div>loading ... </div> : <div>beers</div>}
    </div>
    )
  }
}

export default BeerData;