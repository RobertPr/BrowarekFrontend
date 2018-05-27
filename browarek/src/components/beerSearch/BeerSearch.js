import React from 'react';
import './BeerSearch.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeerSearch extends React.Component {
    state = { error: "" }

    onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const data = {
            Name: form.Name.value,
            Style: form.style.value,
            AlcoholMin: form.alcoPercentFrom.value,
            AlcoholMax: form.alcoPercentTo.value,
            IbuMin: form.gorzkoscFrom.value,
            IbuMax: form.gorzkoscTo.value,
            BlgMin: form.blgFrom.value,
            BlgMax: form.blgTo.value
        }

        axios.post("/beer/search", data)
            .then(response => this.setState({results: response.data}))
            .catch(error => alert(error));
    }

    render = () => {
        return (
            <div id="searchContainer">
                <div id="searchLogo">Wyszukaj:</div>
                <div id="searchSwitch">
                    <button id="brewerySwitch">Piwa</button>
                    <Link to="/brewerySearch">
                        <button id="beerSwitch">Browary</button>
                    </Link>
                </div>
                <div id="twoColumns">
                    <div id="FilterDesc">
                        <div className="Desc">Nazwa:</div>
                        <br></br>
                        <div className="Desc">Styl:</div>
                        {/* <div id="Desc">Kraj:</div>
                        <div id="Desc">Producent:</div>
                       <div id="Desc">Typ producenta:</div> */}
                        <div className="Desc">Obj. alkoholu w %:</div>
                        <div className="Desc">Gorzkość w IBU:</div>
                        {/* <div className="Desc">Ocena użytkowników:</div> */}
                        <div className="Desc">Ekstrakt w °Blg:</div>
                    </div>
                    <form id="searchForm">
                    <input name="Name"/>
                        <br></br>
                        <select className="combobox" name="style"></select>
                        {/* <select className="combobox" name="Country"></select>
                        <select className="combobox" name="Producer"></select>
                         <select className="combobox" name="producerType"></select> */}
                        <div id="alcoPercentInput" className="ToFromContainer">
                            <input name="alcoPercentFrom" className="ToFrom" placeholder="od" />
                            <input name="alcoPercentTo" className="ToFrom" placeholder="do" />
                        </div>
                        <div id="gorzkoscInput" className="ToFromContainer">
                            <input name="gorzkoscFrom" className="ToFrom" placeholder="od" />
                            <input name="gorzkoscTo" className="ToFrom" placeholder="do" />
                        </div>
                        <div id="blgInput" className="ToFromContainer">
                            <input name="blgFrom" className="ToFrom" placeholder="od" />
                            <input name="blgTo" className="ToFrom" placeholder="do" />
                        </div>
                    </form>
                </div>
                <input id="searchButton" form="searchForm" type="submit" value="Wyszukaj" />
            </div>
        );
    }
}

export default BeerSearch;
