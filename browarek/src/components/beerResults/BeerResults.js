import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './BeerResults.css';
import base64ToImageUrl from '../../services/base64ToImageUrl';

class BeerResults extends React.Component {
	state = { results: [] }

	componentDidMount = () => {
		if (this.props.results) {
			this.replaceImages(this.props.results);
		}
	}
	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.results != this.props.results) {
			this.replaceImages(this.props.results);
		}
	}
	replaceImages = (beers) => {
		for (let beer of beers) {
			beer.image = base64ToImageUrl(beer.image);
		}
		this.setState({ results: beers });
	}

	render = () => {
		return (
			<div id="magicalContainer">
				<div id="breweryName">Wyszukane piwa</div>
				<div id="beerWindow">
					<ul id="beerList">
						{this.state.results.map(beer =>
							<Link key={beer.id} to={`/beerCard/${beer.id}`} className="beerRectangleMS">
								<div className="beerImgContainerMS" style={{ backgroundImage: `url(${beer.image})` }}></div>
								<div className="beerNameMS">{beer.name}</div>
							</Link>)}
					</ul>
				</div>
			</div>
		);
	}
}
export default BeerResults;