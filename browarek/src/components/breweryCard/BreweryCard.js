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
                            <div className="descTitle" id="producerTypeTitle">Typ producenta</div>
                            <div className="descVar" id="producerType">Regionalny</div>
                            <div className="descTitle" id="countryTitle">Kraj</div>
                            <div className="descVar" id="Country">Polska</div>
                            <div className="descTitle" id="createDateTitle">Rok założenia</div>
                            <div className="descVar" id="createDate">1864</div>
                        </div>
                        <div id="imgContainer">
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
                                <li className="beerRectangle"><a href=""></a>
                                    <div className="beerImgContainer"></div>
                                    <div className="beerName">Żywiec białe</div>
                                </li>
                                <li className="beerRectangle"><a href=""></a>
                                    <div classNamed="beerImgContainer"></div>
                                    <div className="beerName">Żywiec białe</div>
                                </li>
                                <li className="beerRectangle"><a href=""></a>
                                    <div className="beerImgContainer"></div>
                                    <div className="beerName">Żywiec białe</div>
                                </li>
                                <li className="beerRectangle"><a href=""></a>
                                    <div classNamed="beerImgContainer"></div>
                                    <div className="beerName">Żywiec białe</div>
                                </li>
                                <li className="beerRectangle"><a href=""></a>
                                    <div className="beerImgContainer"></div>
                                    <div className="beerName">Żywiec białe</div>
                                </li>
                                <li className="beerRectangle"><a href=""></a>
                                    <div className="beerImgContainer"></div>
                                    <div className="beerName">Żywiec białe</div>
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