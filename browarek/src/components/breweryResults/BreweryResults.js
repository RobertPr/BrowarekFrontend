import React from 'react';
import './BreweryResults.css';
import { Link } from 'react-router-dom';

class BreweryResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render = () => {
        return (
            <div id="magicalContainer">
                <div id="breweryName">Wyszukane browary</div>
                <div id="beerWindow">
                    <ul id="beerList">
                        <li class="beerRectangle"><a href=""></a>
                            <div id="beerImgContainer"></div>
                            <div id="beerName">Browar żywiec</div>
                        </li>
                        <li class="beerRectangle"><a href=""></a>
                            <div id="beerImgContainer"></div>
                            <div id="beerName">Browar żywiec</div>
                        </li><li class="beerRectangle"><a href=""></a>
                            <div id="beerImgContainer"></div>
                            <div id="beerName">Browar żywiec</div>
                        </li><li class="beerRectangle"><a href=""></a>
                            <div id="beerImgContainer"></div>
                            <div id="beerName">Browar żywiec</div>
                        </li><li class="beerRectangle"><a href=""></a>
                            <div id="beerImgContainer"></div>
                            <div id="beerName">Browar żywiec</div>
                        </li>
                        <li class="beerRectangle"><a href=""></a>
                            <div id="beerImgContainer"></div>
                            <div id="beerName">Browar żywiec</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BreweryResults;