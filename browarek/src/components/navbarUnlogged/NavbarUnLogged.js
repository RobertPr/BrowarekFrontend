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
                <Link to="/" className="fas fa-beer"></Link>
                <Link to="/" id="logoText">Browarek</Link>
                <div id="navbarButtonsContainer">
                    <Link to="/login">
                        <div className="navbarButton">
                            <span className="fas fa-sign-in-alt"></span>
                            <span className="loginButtonText">Logowanie</span>
                        </div>
                    </Link>
                    <Link to="/register">
                        <div className="navbarButton">
                            <span className="fas fa-user-plus"></span>
                            <span className="loginButtonText">Rejestracja</span>
                        </div>
                    </Link>
                    <Link to="/beerSearch">
                        <div className="navbarButton">
                            <span className="fas fa-search"></span>
                            <span className="loginButtonText">Wyszukiwarka</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavbarUnLogged;