import React from 'react';
import './BeerSearch.css';
import { Link } from 'react-router-dom';

class BeerSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
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
                <input id="searchName" form="searchForm" placeholder="Wpisz nazwe piwa" />
                <div id="twoColumns">
                    <div id="FilterDesc">
                        <div className="Desc">Filtrowanie</div>
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
                        <button id="clearFilters">Wyczyść filtry</button>
                        <br></br>
                        <select className="combobox" name="style"></select>
                        {/* <select className="combobox" name="Country"></select>
                        <select className="combobox" name="Producer"></select>
                         <select className="combobox" name="producerType"></select> */}
                        <div id="alcoPercentInput" className="ToFromContainer">
                        <input id="alcoPercentFrom" className="ToFrom" placeholder="od"/>
                        <input id="alcoPercentTo" className="ToFrom" placeholder="do"/>
                        </div>
                        <div id="gorzkoscInput" className="ToFromContainer">
                        <input id="gorzkoscFrom" className="ToFrom" placeholder="od"/>
                        <input id="gorzkoscTo" className="ToFrom" placeholder="do"/>
                        </div>
                        <div id="blgInput" className="ToFromContainer">
                        <input id="blgFrom" className="ToFrom" placeholder="od"/>
                        <input id="blgTo" className="ToFrom" placeholder="do"/>
                        </div>
                    </form>
                </div>
                <input id="searchButton" form="searchForm" type="submit" value="Wyszukaj" />
            </div>
        );
    }
}

export default BeerSearch;
