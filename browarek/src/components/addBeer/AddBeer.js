import React from 'react';
import './AddBeer.css';
import { Link } from 'react-router-dom';

class AddBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render = () => {
        return (
            <React.Fragment>
                <div id="addBeerPhoto">
                    <span id="addImgDesc">Kliknij, aby dodać zdjęcie piwa</span>
                </div>
                <div id="addBreweryPhoto">
                    <span id="addImgDesc">Kliknij, aby dodać zdjęcie browaru</span>
                </div>
                <div id="addBreweryContainer">
                    <div id="addBreweryTitle">Dodaj</div>
                    <div id="searchSwitch">
                        <button id="brewerySwitch">Piwo</button>
                        <button id="beerSwitch">Browar</button>
                    </div>
                    <form id="beerForm">
                        <div>
                            <label>Styl</label>
                            <input className="addBreweryInput" type="text" name="Style" />
                        </div>
                        <div>
                            <label>Obj. alkoholu w %</label>
                            <input className="addBreweryInput" type="text" name="alco%" />
                        </div>
                        <div>
                            <label>Gorzkość</label>
                            <input className="addBreweryInput" type="text" name="Gorzkosc" />
                        </div>
                        <div>
                            <label>Ekstrakt w *Blg</label>
                            <input className="addBreweryInput" type="text" name="Ekstrakt" />
                        </div>
                        {/* <div id="rateBeerStars">
                            <label className="rateBeerTitle">Twoja ocena</label>
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
                        </div> */}
                       {/*  <textarea className="addBreweryInputLong" type="text" name="Comment" placeholder="Komentarz"></textarea>
                        <br></br> */}
                        <textarea className="addBreweryInputLong" type="text" name="beerDesc" placeholder="Opis piwa"></textarea>
                            <div id="checkboxDiv">
                                <input type="checkbox" name="addBrowarCheckBox" value="checked" />
                                <label> Dodaj nowy browar</label>
                                <select className="addBreweryInput" name="addBreweryList">
                                <option hidden>Wybierz browar z listy</option>
                                </select>
			                </div>
                        <div>
                            <label>Nazwa browaru</label>
                            <input className="addBreweryInput" type="text" name="alco%" />
                        </div>
                        <div>
                            <label>Typ producenta</label>
                            <input className="addBreweryInput" type="text" name="producerType" />
                        </div>
                        <div>
                            <label>Kraj</label>
                            <input className="addBreweryInput" type="text" name="Country" />
                        </div>
                        <div>
                            <label>Rok założenia</label>
                            <input className="addBreweryInput" type="text" name="creationYear" />
                        </div>
                        <input name="addButton" type="submit" value="Dodaj" />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddBeer;