import React from "react";

class Favorites extends React.Component {
  render() {
    const { beerData } = this.props;
    const { favorites } = this.props;
    // console.log('fav: beerData: ', beerData);
    console.log("fav: favorites: ", favorites);
    return <div></div>;
  }
}

export default Favorites;
