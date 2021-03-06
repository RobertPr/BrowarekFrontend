import React from 'react';
import './BreweryResults.css';
import { Link, Redirect } from 'react-router-dom';
import base64ToImageUrl from '../../services/base64ToImageUrl';

class BreweryResults extends React.Component {
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
	replaceImages = (brewers) => {
		for (let brewery of brewers) {
			brewery.image = base64ToImageUrl(brewery.image);
		}
		this.setState({ results: brewers });
	}

    render = () => {
        return (
            <div id="magicalContainer">
                <div id="breweryName">Wyszukane browary</div>
                <div id="beerWindow">
                    <ul id="beerList">
						{this.state.results.map(brewer =>
							<Link key={brewer.id} to={`/breweryCard/${brewer.id}`} className="beerRectangle">
								<div className="beerImgContainer" style={{ backgroundImage: `url(${brewer.image})` }}></div>
								<div className="beerName">{brewer.name}</div>
                            </Link>)}
                            {this.state.results.length === 0 && <h2>Brak wyników</h2>}
					</ul>
                </div>
            </div>
        );
    }
}

export default BreweryResults;

/* <ul id="beerList">
                        <li className="beerRectangle"><a href=""></a>
                            <div className="beerImgContainer"></div>
                            <div className="beerName">Browar żywiec</div>
                        </li>
                        <li className="beerRectangle"><a href=""></a>
                            <div className="beerImgContainer"></div>
                            <div className="beerName">Browar żywiec</div>
                        </li><li className="beerRectangle"><a href=""></a>
                            <div className="beerImgContainer"></div>
                            <div className="beerName">Browar żywiec</div>
                        </li><li className="beerRectangle"><a href=""></a>
                            <div className="beerImgContainer"></div>
                            <div className="beerName">Browar żywiec</div>
                        </li><li className="beerRectangle"><a href=""></a>
                            <div className="beerImgContainer"></div>
                            <div className="beerName">Browar żywiec</div>
                        </li>
                        <li className="beerRectangle"><a href=""></a>
                            <div className="beerImgContainer"></div>
                            <div className="beerName">Browar żywiec</div>
                        </li>
                    </ul> */