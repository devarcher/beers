import React from "react";

class Favorites extends React.Component {
  render() {
    const { beerData } = this.props;
    const { favData } = this.props;
    // console.log('fav: beerData: ', beerData);
    console.log("fav: favorites: ", favData);
    return <div></div>;
  }
}

export default Favorites;
