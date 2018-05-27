import React from 'react';
import './NavbarUnLogged.css';
import { Link } from 'react-router-dom';

class NavbarUnLogged extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render = () => {
        return (
            <div id="navbarUnlogged">
                <div className="fas fa-beer"></div>
                <div id="logoText">Browarek</div>
                <div id="navbarButtonsContainer">
                    <div className="navbarButton">
                        <span className="fas fa-sign-in-alt"></span>
                        <span className="loginButtonText">Logowanie</span>
                    </div>
                    <div className="navbarButton">
                        <span className="fas fa-user-plus"></span>
                        <span className="loginButtonText">Rejestracja</span>
                    </div>
                    <div className="navbarButton">
                        <span className="fas fa-search"></span>
                        <span className="loginButtonText">Wyszukiwarka</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarUnLogged;