import React from 'react';
import './BeerCard.css';
import { Link } from 'react-router-dom';

class BeerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    render = () => {
        return (
            <div id="mainContainer">
                <div id="leftHalf">
                    <div id="beerNameBeerCard">Perła Export</div>
                    <div id="imgAndDesc">
                        <img id="beerImg" src="http://www.jakiepiwo.pl/beers/img/W96ynk/0feaaf6f09779c84940ce0dd565a263f_lg.png"/>
                        <div id="Desc">
                            <div className="descTitle" id="breweryTitle">Browar</div>
                            <div className="descVar" id="breweryVar">Perła Browary Lubelskie S.A.</div>
                            <div className="descTitle" id="producerTypeTitle">Typ producenta</div>
                            <div className="descVar" id="producerTypeVar">Koncern</div>
                            <div className="descTitle" id="countryTitle">Kraj</div>
                            <div className="descVar" id="countryVar">Polska</div>
                            <div className="descTitle" id="styleTitle">Styl</div>
                            <div className="descVar" id="styleVar">Pale lager</div>
                            <div className="descTitle" id="tempTitle">Temp. podawania</div>
                            <div className="descVar" id="tempVar">0 - 4 *C</div>
                            <div className="descTitle" id="servingTitle">Podawać w</div>
                            <div className="descVar" id="servingVar">Shaker lager</div>
                            <div className="descTitle" id="ibuTitle">IBU</div>
                            <div className="descVar" id="ibuVar">15</div>
                            <div className="descTitle" id="blgTitle">Blg</div>
                            <div className="descVar" id="blgVar">11*</div>
                        </div>
                    </div>
                </div>
                <div id="rightHalf">
                    <div id="alcoAndLongDescContainer">
                        <div id="alcoholTitle">Alkohol</div>
                        <div id="alcoholPercent">6,0%</div>
                        <div id="longDescTitle">Opis</div>
                        <div id="longDesc">Wytwory małży (głównie perłopławów z rodzajów Pteria i Pinctada), rzadko ślimaków. Zbudowane są z tej samej substancji co wewnętrzna strona muszli (masa perłowa), której głównymi składnikami są węglan wapnia (w postaci aragonitu) i rogowata substancjabiałkowa (konchiolina), która spaja mikrokryształy skupione koncentrycznie wokół jądra. Perły powstają najczęściej w wyniku reakcji organizmu na ciało obce, które przedostało się do muszli. W jubilerstwie perły definiuje się jako „produkty naturalnepochodzenia organicznego, powstałe w płaszczu muszli perłopławów perłorodnych lub inny.</div>
                    </div>
                    <div id="rateBeer">
                        <div id="rateBeerTitle">Oceń piwo!</div>
                        <div id="rateBeerStars">
                            <form>
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
                            </form>
                        </div>
                        <div id="commentsTitle">Komentarze</div>
                        <div id="commentBox"></div>
                    </div>
                </div>
            </div>
                );
            }
        }
        
export default BeerCard;