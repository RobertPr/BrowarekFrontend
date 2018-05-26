import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './BeerResults.css';

class BeerResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render = () => {
		return (
			<div id="magicalContainer">
				<div id="breweryName">Wyszukane piwa</div>
				<div id="beerWindow">
					<ul id="beerList">
						<li class="beerRectangle"><a href=""></a>
							<div id="beerImgContainer"></div>
							<div id="beerName">Żywiec białe</div>
						</li>
						<li class="beerRectangle"><a href=""></a>
							<div id="beerImgContainer"></div>
							<div id="beerName">Żywiec białe</div>
						</li><li class="beerRectangle"><a href=""></a>
							<div id="beerImgContainer"></div>
							<div id="beerName">Żywiec białe</div>
						</li><li class="beerRectangle"><a href=""></a>
							<div id="beerImgContainer"></div>
							<div id="beerName">Żywiec białe</div>
						</li><li class="beerRectangle"><a href=""></a>
							<div id="beerImgContainer"></div>
							<div id="beerName">Żywiec białe</div>
						</li>
						<li class="beerRectangle"><a href=""></a>
							<div id="beerImgContainer"></div>
							<div id="beerName">Żywiec białe</div>
						</li>
					</ul>
				</div>
			</div >
		);
	}
}
export default BeerResults;