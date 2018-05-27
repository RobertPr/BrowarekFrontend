import React from 'react';
import './MainScreen.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base64ToImageUrl from '../../services/base64ToImageUrl';

class MainScreen extends React.Component {
	state = {};
	componentDidMount = () => {
		axios.get('/beer', )
			.then(response => this.replaceImages(response.data))
			.catch(error => console.log(error));
	}
	replaceImages = (beers) => {
		for(let beer of beers){
			beer.image = base64ToImageUrl(beer.image);
		}
		this.setState({ beers })
	}

	render = () => {
		return (
			<div id="mainScreen">
				<div id="titleScreen">
					<div id="Welcome">Witaj na stronie!</div>
					<div id="siteDesc">Szukasz określonego piwa? Chcesz dowiedzieć sie czegoś wiecej o swoim ulubionym browarze? Czy może chcesz po prostu znaleźć najmocniejsze trunki? To oraz wiele więcej możesz znaleźć na naszej stronie. Użyj przycisków na górze aby poruszać się po strone. Jeśli portal ci się spodoba, zapraszamy do założenia konta.</div>
					<img id="mainPhoto" src="http://www.icarusbrewing.com/wp-content/uploads/2015/11/download.jpg" height="470" width="auto" />
				</div>
				<div id="magicalContainerMS">
					<div id="ourBeersTitle">Nasze piwa</div>
					<div id="allBeersWindow">
						<ul id="allBeersList">
							{this.state.beers && this.state.beers.map((beer) =>
								<Link key={beer.id} to={`/beer/${beer.id}`} className="beerRectangleMS"><a href=""></a>
									<div className="beerImgContainerMS" style={{backgroundImage: `url(${beer.image})`}}></div>
									<div className="beerNameMS">{beer.name}</div>
								</Link>)}

						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default MainScreen;