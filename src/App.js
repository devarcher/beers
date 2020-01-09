import React, { Component } from 'react';

import './App.css';

class BeerData extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(data => data.map(beer => (
      {
        id: `${beer.id}`
      }
    )))
    .then(allBeers => this.setState({
      allBeers,
      isLoading:false
    }))
    .catch(error => console.log(error))
  }

  render() {
    const { isLoading, allBeers }  = this.state;
    return (
    <div>
      {this.state.loading ? <div>loading ... </div> : <div>{this.allBeers}</div>}
    </div>
    )
  }
}


function App() {
  return (
    <div>
      <BeerData />
    </div>
  );
}

export default App;
