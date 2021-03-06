import React from "react";
// import Favorites from "./Favorites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faHeart } from "@fortawesome/free-solid-svg-icons";

class BeerCardSingles extends React.Component {
  state = {
    isLiked: false,
    favorites: []
  };

  // Handles Click event on "Favorite w/ Icon" Toggles Icons / Text / Styling
  handleClick(id) {
    const { isLiked } = this.state;
    this.setState({ isLiked: !isLiked });

    // Below was Attempt at adding beers into Favorites Array for dynamically making Favorites div.
    // const { beerData } = this.props;
    // const { favorites } = this.state;

    // console.log(this.state.isLiked);
    // console.log(beerData.id);

    // if (beerData.id === id && isLiked === false) {
    //   this.setState({ favorites: [...favorites, beerData] });
    // } else if (beerData.id === id && isLiked === true) {
    //   console.log("inside else if");
    //   this.setState({
    //     favorites: favorites.filter(
    //       (beer, index) => index + 1 !== id
    //     )
    //   });
    // }
  }

  render() {
    const { isLiked } = this.state;
    const { beerData } = this.props;
    // console.log(beerData)
    // console.log("***Favorites State***", this.state.favorites);
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="groupOne">
              <img src={beerData.image} className="beerImage" alt="" />
              <div className="textGroupOne">
                <h1 className="title">{beerData.name}</h1>
                <h2 className="tagline">{beerData.tagline}</h2>
                <div className="textGroupTwo">
                  <p>{beerData.description}</p>
                  <div className="abvAndIbu">
                    <h3>ABV: {beerData.abv}</h3>
                    <h3 className="ibu">IBU: {beerData.ibu}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="favs">
              <span
                className="favsClick"
                onClick={() => this.handleClick(beerData.id)}
              >
                {isLiked ? "Over It" : "Love It"}
                <FontAwesomeIcon
                  icon={isLiked ? faHeart : faBeer}
                  className="beerIcon"
                  color={isLiked ? "#f0baba" : "#e4decd"}
                  size="3x"
                ></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </div>
        <div>
          {/* <Favorites favorites={this.state.favorites} beerData={beerData} /> */}
        </div>
      </div>
    );
  }
}

export default BeerCardSingles;
