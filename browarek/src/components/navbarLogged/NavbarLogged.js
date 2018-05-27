import React from 'react';
import './NavbarLogged.css';
import { Link } from 'react-router-dom';

class NavbarLogged extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render = () => {
        return (
            <div id="navbarLogged">
                <div className="fas fa-beer"></div>
                <div id="logoText">Browarek</div>
                <div id="navbarButtonsContainer">
                    <div className="navbarButton">
                        <span className="fas fa-search"></span>
                        <span className="navbarButtonText">Wyszukiwarka</span>
                    </div>
                    <div className="navbarButton">
                        <span className="fas fa-plus-square"></span>
                        <span className="navbarButtonText">Dodaj</span>
                    </div>
                </div>
                <div id="userAndLogout">
                    <div id="user">
                        <span id="userText">Krzysztof Kononowicz</span>
                    </div>
                    <button id="logoutButton" type="button">Wyloguj</button>
                </div>
            </div>
        );
    }
}

export default NavbarLogged;