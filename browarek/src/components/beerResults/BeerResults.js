import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './BeerResults.css';
import NavbarLogged from '../navbarLogged/NavbarLogged';

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
						<li className="beerRectangle"><a href=""></a>
							<div className="beerImgContainer"></div>
							<div className="beerName">Żywiec białe</div>
						</li>
						<li className="beerRectangle"><a href=""></a>
							<div className="beerImgContainer"></div>
							<div className="beerName">Żywiec białe</div>
						</li><li className="beerRectangle"><a href=""></a>
							<div className="beerImgContainer"></div>
							<div className="beerName">Żywiec białe</div>
						</li><li className="beerRectangle"><a href=""></a>
							<div className="beerImgContainer"></div>
							<div className="beerName">Żywiec białe</div>
						</li><li className="beerRectangle"><a href=""></a>
							<div className="beerImgContainer"></div>
							<div className="beerName">Żywiec białe</div>
						</li>
						<li className="beerRectangle"><a href=""></a>
							<div className="beerImgContainer"></div>
							<div className="beerName">Żywiec białe</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default BeerResults;