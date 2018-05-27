import React from 'react';
import './AddBeer.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import beerTypes from '../../data/beerTypes';

class AddBeer extends React.Component {
    state = { error: "", breweries: [] }
    componentDidMount = () => {
        axios.get('/brewery')
            .then(response => this.setState({ breweries: response.data }))
            .catch(error => console.log(error));
    }

    onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData();
        
        const data = {
            name: form.Name.value,
            style: form.Style.value,
            alcohol: form.Alcohol.value,
            ibu: form.Ibu.value,
            blg: form.Blg.value,
            description: form.BeerDesc.value,
            image: this.state.beerImage,
            brewery: form.addBreweryList.value
        }
        for(let key in data){
            formData.append(key, data[key]);
        }

        axios.post("/beer", formData)
            .then(response => this.props.history.push(`/beerCard/${response.data}`))
            .catch(error => console.log(error));
    }
    handleImageUpload = (e) => {
        const image = e.target.files[0];
        this.setState({beerImage: image});
    }

    render = () => {
        return (
            <React.Fragment>
                <div className="addBeerPhoto" >
                    <label htmlFor="photoInput" className="addImgDesc">Kliknij, aby dodać zdjęcie piwa</label>
                    <input name="photoInput" type="file" onChange={this.handleImageUpload}/>
                </div>
                <div id="addBreweryContainer">
                    <div id="addBreweryTitle">Dodaj</div>
                    <div id="searchSwitch">
                        <button id="brewerySwitch">Piwo</button>
                        <Link to="/addBrewery">
                            <button id="beerSwitch">Browar</button>
                        </Link>
                    </div>
                    <form id="beerForm" onSubmit={this.onSubmit}>
                        <div>
                            <label>Nazwa</label>
                            <input className="addBreweryInput" type="text" name="Name" />
                        </div>
                        <div>
                            <label>Styl</label>
                            <select className="addBreweryInput" type="text" name="Style">
                                {beerTypes.map((type, i) =>
                                    <option key={i} value={i}>{type}</option>)}
                            </select>
                        </div>
                        <div>
                            <label>Obj. alkoholu w %</label>
                            <input className="addBreweryInput" type="text" name="Alcohol" />
                        </div>
                        <div>
                            <label>Gorzkość</label>
                            <input className="addBreweryInput" type="text" name="Ibu" />
                        </div>
                        <div>
                            <label>Ekstrakt w *Blg</label>
                            <input className="addBreweryInput" type="text" name="Blg" />
                        </div>
                        {/* <div id="rateBeerStars">
                            <label className="rateBeerTitle">Twoja ocena</label>
                            <div className="rating">
                                <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" />
                                <label className="starButtons" for="star5">☆</label>
                                <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" />
                                <label className="starButtons" for="star4">☆</label>
                                <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" />
                                <label className="starButtons" for="star3">☆</label>
                                <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" />
                                <label className="starButtons" for="star2">☆</label>
                                <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" />
                                <label className="starButtons" for="star1">☆</label>
                                <div className="clear"></div>
                            </div>
                        </div> */}
                        {/*  <textarea className="addBreweryInputLong" type="text" name="Comment" placeholder="Komentarz"></textarea>
                        <br></br> */}
                        <textarea className="addBreweryInputLong" type="text" name="BeerDesc" placeholder="Opis piwa"></textarea>
                        <div id="checkboxDiv">
                            <label> Browar</label>
                            <select className="addBreweryInput" name="addBreweryList">
                                <option hidden>Wybierz browar z listy</option>
                                {this.state.breweries.map(brewery =>
                                    <option key={brewery.id} value={brewery.id}>{brewery.name}</option>)}
                            </select>
                        </div>
                        <input name="addButton" type="submit" value="Dodaj" />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddBeer;