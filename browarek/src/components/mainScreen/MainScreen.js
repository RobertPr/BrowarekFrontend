import React from 'react';
import './MainScreen.css';
import { Link } from 'react-router-dom';

class MainScreen extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render = () => {
        return (
            <div id="mainScreen">
		<div id="titleScreen">
			<div id="Welcome">Witaj na stronie!</div>
			<div id="siteDesc">Szukasz określonego piwa? Chcesz dowiedzieć sie czegoś wiecej o swoim ulubionym browarze? Czy może chcesz po prostu znaleźć najmocniejsze trunki? To oraz wiele więcej możesz znaleźć na naszej stronie. Użyj przycisków na górze aby poruszać się po strone. Jeśli portal ci się spodoba, zapraszamy do założenia konta.</div>
		<img id="mainPhoto" src="http://www.icarusbrewing.com/wp-content/uploads/2015/11/download.jpg" height="470" width="auto"/>
		</div>
		<div id="magicalContainerMS">
					<div id="ourBeersTitle">Nasze piwa</div>
						<div id="allBeersWindow">
								<ul id="allBeersList">
									<li className="beerRectangleMS"><a href=""></a>
											<div className="beerImgContainerMS"></div>
											<div className="beerNameMS">Żywiec białe</div>
									</li>
									<li className="beerRectangleMS"><a href=""></a>
											<div className="beerImgContainerMS"></div>
											<div className="beerNameMS">Żywiec białe</div>
									</li><li className="beerRectangleMS"><a href=""></a>
											<div className="beerImgContainerMS"></div>
											<div className="beerNameMS">Żywiec białe</div>
									</li><li className="beerRectangleMS"><a href=""></a>
											<div className="beerImgContainerMS"></div>
											<div className="beerNameMS">Żywiec białe</div>
									</li><li className="beerRectangleMS"><a href=""></a>
											<div className="beerImgContainerMS"></div>
											<div className="beerNameMS">Żywiec białe</div>
									</li>
									<li className="beerRectangleMS"><a href=""></a>
											<div className="beerImgContainerMS"></div>
											<div iclassName="beerNameMS">Żywiec białe</div>
									</li>
								</ul>
						</div>
			</div>	
	</div>
        );
    }
}

export default MainScreen;