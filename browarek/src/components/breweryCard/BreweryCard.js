import React from 'react';
import './BreweryCard.css';
import { Link } from 'react-router-dom';
import base64ToImageUrl from '../../services/base64ToImageUrl';
import breweryTypes from '../../data/breweryTypes';
import countries from '../../data/countries';
import axios from 'axios';

class BreweryCard extends React.Component {
    state = { error: "" };
    componentDidMount = () => {
        axios.get(`/brewery/${this.props.match.params.breweryId}`)
            .then(response => this.replaceImage(response.data))
            .catch(error => console.log(error));

        axios.get(`/beer/brewery/${this.props.match.params.breweryId}`)
            .then(response => this.replaceImages(response.data))
            .catch(error => console.log(error));
    }
    replaceImage = (brewery) => {
        brewery.image = base64ToImageUrl(brewery.image);
        this.setState({ ...brewery })
    }
    replaceImages = (beers) => {
        for (let beer of beers) {
            beer.image = base64ToImageUrl(beer.image);
        }
        this.setState({ beers })
    }

    render = () => {
        return (
            <React.Fragment>
                <div id="mainContainer">
                    <div id="leftSide">
                        <div id="breweryName">{this.state.name}</div>
                        <div id="descBox">
                            <div className="descTitle" id="producerTypeTitle">Typ producenta</div>
                            <div className="descVar" id="producerType">{breweryTypes[this.state.type]}</div>
                            <div className="descTitle" id="countryTitle">Kraj</div>
                            <div className="descVar" id="Country">{this.state.country && countries[this.state.country].name_pl}</div>
                            <div className="descTitle" id="createDateTitle">Rok założenia</div>
                            <div className="descVar" id="createDate">{this.state.yearEst}</div>
                        </div>
                        <div id="imgContainer" style={{ backgroundImage: `url(${this.state.image})` }}>
                            {/* <div id="rateBeerStars">
                                <form>
                                    <div className="rating">
                                        <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" />
                                        <label className="starButtons" for="star5">☆</label>
                                        <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" />
                                        <label className="starButtons" for="star4">☆</label>
                                        <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" />
                                        <label className="starButtons" for="star3">☆</label>
                                        <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" />
                                        <label className="starButtons" for="star2">☆</label>
                                        <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" />
                                        <label className="starButtons" for="star1">☆</label>
                                        <div className="clear"></div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                    <div id="rightSide">
                        <div id="beerListTitleBC">Piwa tego browaru</div>
                        <div id="beerWindowBC">
                            <ul id="beerList">
                                {this.state.beers && this.state.beers.map((beer) =>
                                    <Link key={beer.id} to={`/beerCard/${beer.id}`} className="beerRectangle">
                                        <div className="beerImgContainerMS" style={{ backgroundImage: `url(${beer.image})` }}></div>
                                        <div className="beerName">{beer.name}</div>
                                    </Link>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BreweryCard;