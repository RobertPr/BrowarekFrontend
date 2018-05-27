import React from 'react';
import './AddBrewery.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import breweryTypes from '../../data/breweryTypes';
import countries from '../../data/countries';

class AddBrewery extends React.Component {
    state = { error: "" }

    onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData();
        
        const data = {
            name: form.breweryName.value,
            type: form.producerType.value,
            country: form.Country.value,
            yearEst: form.creationYear.value,
            image: this.state.breweryImage
        }
        for(let key in data){
            formData.append(key, data[key]);
        }

        axios.post("/brewery", formData)
            .then(response => this.props.history.push(`/breweryCard/${response.data}`))
            .catch(error => console.log(error));
    }
    handleImageUpload = (e) => {
        const image = e.target.files[0];
        this.setState({breweryImage: image});
    }

    render = () => {
        return (
            <React.Fragment>
                <div id="addBreweryContainer">
                    <div id="addBreweryTitle">Dodaj</div>
                    <div id="addBreweryPhotoBrewery">
                        <label id="addImgDescBrewery">Kliknij, aby dodać zdjęcie</label>
                        <input id="addBreweryImg" name="photoInput" type="file" onChange={this.handleImageUpload}/>
                    </div>
                    <div id="searchSwitchBrewery">
                        <Link to="/addBeer">
                            <button id="brewerySwitchBrewery">Piwo</button>
                        </Link>
                        <button id="beerSwitchBrewery">Browar</button>
                    </div>
                    <div id="inputsContainer">
                        <div id="inputTitlesBox">
                            <div className="inputsTitles">Nazwa browaru</div>
                            <div className="inputsTitles">Typ producenta</div>
                            <div className="inputsTitles">Kraj</div>
                            <div className="inputsTitles">Rok założenia</div>
                        </div>
                        <form id="Inputs" onSubmit={this.onSubmit}>
                            <input className="addBreweryInputBrewery" type="text" name="breweryName"/><br></br>
                            <select className="addBreweryInputBrewery" type="text" id="producerType" name="producerType">
                                {breweryTypes.map((type,i) => 
                                <option key={i} value={i}>{type}</option>)}
                            </select>
                            <br></br>
                            <select defaultValue={166} className="addBreweryInputBrewery" type="text" id="Country" name="Country">
                                {countries.map((country,i) => 
                                <option key={i} value={i}>{country.name_pl}</option>)}
                            </select>
                            <br></br>
                            <input className="addBreweryInputBrewery" type="text" id="creationYear" name="creationYear"/><br></br>
                        </form>
                    </div>
                    <input form="Inputs" id="addButtonBrewery" type="submit" value="Dodaj" />
                </div>
            </React.Fragment>
        );
    }
}

export default AddBrewery;
