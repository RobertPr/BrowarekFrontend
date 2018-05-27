import React from 'react';
import './BrewerySearch.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class BrewerySearch extends React.Component {
    state = { error: ""}

    onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const data = {
            Name: form.Name.value,
            ProducerType: form.producerType.value,
            Country: form.Country.value,
            DateMin: form.creationDateFromName.value,
            DateMax: form.creationDateToName.value,
        }

        axios.post("/brewery/search", data)
        .then(response => this.setState({results: response.data}))
        .catch(error => alert(error));
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
                <form id="brewerySearchFrom">
                <input name="Name" id="searchName" form="searchForm" placeholder="Wpisz nazwe browaru" />
                <div id="twoColumns">
                    <div id="FilterDesc">
                        <div className="Desc">Typ producenta:</div>
                        <div className="Desc">Kraj:</div>
                        <div className="Desc">Rok założenia:</div>
                    </div>
                    <div id="searchForm">
                        <select className="comboboxBrewery" name="producerType"></select>
                        <select className="comboboxBrewery" name="Country"></select>
                        <div id="creationDateInput">
                        <input name="creationDateFromName" id="creationDateFrom" placeholder="od"/>
                        <input name="creationDateToName" id="creationDateTo" placeholder="do"/>
                        </div>
                    </div>
                </div>
                <input name="searchButtonName" id="searchButton" form="searchForm" type="submit" value="Wyszukaj" />
                </form>
            </div>
        );
    }
}

export default BrewerySearch;
