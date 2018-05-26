import React from 'react';
import './BreweryCard.css';
import { Link } from 'react-router-dom';

class BreweryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render = () => {
        return (
            <React.Fragment>
                <div id="mainContainer">
                    <div id="leftSide">
                        <div id="breweryName">Żywiec</div>
                        <div id="descBox">
                            <div class="descTitle" id="producerTypeTitle">Typ producenta</div>
                            <div class="descVar" id="producerType">Regionalny</div>
                            <div class="descTitle" id="countryTitle">Kraj</div>
                            <div class="descVar" id="Country">Polska</div>
                            <div class="descTitle" id="createDateTitle">Rok założenia</div>
                            <div class="descVar" id="createDate">1864</div>
                        </div>
                        <div id="imgContainer">
                            <div id="rateBeerStars">
                                <form>
                                    <div class="rating">
                                        <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" />
                                        <label class="starButtons" for="star5">☆</label>
                                        <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" />
                                        <label class="starButtons" for="star4">☆</label>
                                        <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" />
                                        <label class="starButtons" for="star3">☆</label>
                                        <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" />
                                        <label class="starButtons" for="star2">☆</label>
                                        <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" />
                                        <label class="starButtons" for="star1">☆</label>
                                        <div class="clear"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="rightSide">
                        <div id="beerListTitle">Piwa tego browaru</div>
                        <div id="beerWindow">
                            <ul id="beerList">
                                <li class="beerRectangle"><a href=""></a>
                                    <div id="beerImgContainer"></div>
                                    <div id="beerName">Żywiec białe</div>
                                </li>
                                <li class="beerRectangle"><a href=""></a>
                                    <div id="beerImgContainer"></div>
                                    <div id="beerName">Żywiec białe</div>
                                </li>
                                <li class="beerRectangle"><a href=""></a>
                                    <div id="beerImgContainer"></div>
                                    <div id="beerName">Żywiec białe</div>
                                </li>
                                <li class="beerRectangle"><a href=""></a>
                                    <div id="beerImgContainer"></div>
                                    <div id="beerName">Żywiec białe</div>
                                </li>
                                <li class="beerRectangle"><a href=""></a>
                                    <div id="beerImgContainer"></div>
                                    <div id="beerName">Żywiec białe</div>
                                </li>
                                <li class="beerRectangle"><a href=""></a>
                                    <div id="beerImgContainer"></div>
                                    <div id="beerName">Żywiec białe</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BreweryCard;