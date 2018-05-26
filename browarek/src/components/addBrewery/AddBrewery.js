import React from 'react';
import './AddBrewery.css';
import { Link } from 'react-router-dom';

class AddBrewery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render = () => {
        return (
            <React.Fragment>
                <div id="addBreweryContainer">
                    <div id="addBreweryTitle">Dodaj</div>
                    <div id="addBreweryPhotoBrewery">
                        <span id="addImgDescBrewery">Kliknij, aby dodać zdjęcie</span>
                    </div>
                    <div id="searchSwitchBrewery">
                        <button id="beerSwitchBrewery">Piwo</button>
                        <button id="brewerySwitchBrewery">Browaro</button>
                    </div>
                    <div id="inputsContainer">
                        <div id="inputTitlesBox">
                            <div className="inputsTitles">Nazwa browaru</div>
                            <div className="inputsTitles">Typ producenta</div>
                            <div className="inputsTitles">Kraj</div>
                            <div className="inputsTitles">Rok założenia</div>
                        </div>
                        <form id="Inputs">
                            <input className="addBreweryInputBrewery" type="text" id="breweryName" /><br></br>
                            <input className="addBreweryInputBrewery" type="text" id="producerType" /><br></br>
                            <input className="addBreweryInputBrewery" type="text" id="Country" /><br></br>
                            <input className="addBreweryInputBrewery" type="text" id="creationYear" /><br></br>
                        </form>
                    </div>
                    <input form="Inputs" id="addButtonBrewery" type="submit" value="Dodaj" />
                </div>
            </React.Fragment>
        );
    }
}

export default AddBrewery;