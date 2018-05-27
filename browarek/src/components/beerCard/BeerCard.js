import React from 'react';
import './BeerCard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base64ToImageUrl from '../../services/base64ToImageUrl';
import beerTypes from '../../data/beerTypes';
import breweryTypes from '../../data/breweryTypes';
import countries from '../../data/countries';

class BeerCard extends React.Component {
    state = { error: "" };
    componentDidMount = () => {
        axios.get(`/beer/${this.props.match.params.beerId}`)
            .then(response => this.replaceImage(response.data))
            .catch(error => console.log(error));
    }
    replaceImage = (beer) => {
        beer.image = base64ToImageUrl(beer.image);
        beer.blg = beer.blg ? beer.blg + "°" : beer.blg
		this.setState({ ...beer })
	}

    render = () => {
        return (
            <div id="mainContainer">
                <div id="leftHalf">
                    <div id="beerNameBeerCard">{this.state.name}</div>
                    <div id="imgAndDesc">
                        <img id="beerImg" src={this.state.image} />
                        <div id="Desc">
                            <div className="descTitle" id="breweryTitle">Browar</div>
                            <div className="descVar" id="breweryVar">{this.state.brewery}</div>
                            <div className="descTitle" id="producerTypeTitle">Typ producenta</div>
                            <div className="descVar" id="producerTypeVar">{this.state.breweryType != undefined && breweryTypes[this.state.breweryType]}</div>
                            <div className="descTitle" id="styleTitle">Kraj</div>
                            <div className="descVar" id="styleVar">{this.state.country && countries[this.state.country].name_pl}</div>
                            <div className="descTitle" id="styleTitle">Styl</div>
                            <div className="descVar" id="styleVar">{this.state.style != undefined && beerTypes[this.state.style]}</div>
                            {this.state.ibu && <div className="descTitle" id="ibuTitle">IBU</div> }
                            <div className="descVar" id="ibuVar">{this.state.ibu}</div>
                            {this.state.blg && <div className="descTitle" id="blgTitle">Blg</div> }
                            <div className="descVar" id="blgVar">{this.state.blg}</div>
                        </div>
                    </div>
                </div>
                <div id="rightHalf">
                    <div id="alcoAndLongDescContainer">
                        <div id="alcoholTitle">Alkohol</div>
                        <div id="alcoholPercent">{this.state.alcohol}%</div>
                        <div id="longDescTitle">Opis</div>
                        <div id="longDesc">{this.state.description}</div>
                    </div>
                    {/* <div id="rateBeer">
                        <div id="rateBeerTitle">Oceń piwo!</div>
                        <div id="rateBeerStars">
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
                        </div>
                        <div id="commentsTitle">Komentarze</div>
                        <div id="commentBox"></div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default BeerCard;