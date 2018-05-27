import React from 'react';
import './BrewerySearch.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import breweryTypes from '../../data/breweryTypes';
import countries from '../../data/countries';


class BrewerySearch extends React.Component {
    state = { error: "" }

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
            .then(response => {
                this.props.setSearchResults(response.data);
                this.props.history.push("/breweryResults");
            })
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
                <form id="brewerySearchFrom" onSubmit={this.onSubmit}>
                    <input name="Name" id="searchName" placeholder="Wpisz nazwe browaru" />
                    <div id="twoColumns">
                        <div id="FilterDesc">
                            <div className="Desc">Typ producenta:</div>
                            <div className="Desc">Kraj:</div>
                            <div className="Desc">Rok założenia:</div>
                        </div>
                        <div id="searchForm">
                            <select className="comboboxBrewery" name="producerType">
                                <option hidden value="" />
                                {breweryTypes.map((type, i) =>
                                    <option key={i} value={i}>{type}</option>)}</select>
                            <select className="comboboxBrewery" name="Country">
                                <option hidden value="" />
                                {countries.map((country, i) =>
                                    <option key={i} value={i}>{country.name_pl}</option>)}
                            </select>
                            <div id="creationDateInput">
                                <input name="creationDateFromName" id="creationDateFrom" placeholder="od" />
                                <input name="creationDateToName" id="creationDateTo" placeholder="do" />
                            </div>
                        </div>
                    </div>
                    <input name="searchButtonName" id="searchButton" type="submit" value="Wyszukaj" />
                </form>
            </div>
        );
    }
}

export default withRouter(BrewerySearch);
