import React from 'react';
import './BrewerySearch.css';
import { Link } from 'react-router-dom';

class BrewerySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render = () => {
        return (
            <div id="searchContainer">
                <div id="searchLogo">Wyszukaj:</div>
                <div id="searchSwitch">
                    <Link to="/beerSearch">
                    <button id="brewerySwitchBrewery">Piwa</button>
                    </Link>
                    <button id="beerSwitchBrewery">Browary</button>
                </div>
                <input id="searchName" form="searchForm" placeholder="Wpisz nazwe browaru" />
                <div id="twoColumns">
                    <div id="FilterDesc">
                        <div className="Desc">Filtrowanie</div>
                        <br></br>
                        <div className="Desc">Typ producenta:</div>
                        <div className="Desc">Kraj:</div>
                        <div className="Desc">Rok założenia:</div>
                    </div>
                    <form id="searchForm">
                        <button id="clearFilters">Wyczyść filtry</button>
                        <br></br>
                        <select className="comboboxBrewery" name="producerType"></select>
                        <select className="comboboxBrewery" name="Country"></select>
                        <input id="rangeSliderBrewery" className="rangeSlider" type="range" multiple value="10,80" />
                    </form>
                </div>
                <input id="searchButton" form="searchForm" type="submit" value="Wyszukaj" />
            </div>
        );
    }
}

export default BrewerySearch;