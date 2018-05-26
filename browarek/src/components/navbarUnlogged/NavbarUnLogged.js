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
                <div class="fas fa-beer"></div>
                <div id="logoText">Browarek</div>
                <div id="navbarButtonsContainer">
                    <div class="navbarButton">
                        <span class="fas fa-sign-in-alt"></span>
                        <span id="loginButtonText">Logowanie</span>
                    </div>
                    <div class="navbarButton">
                        <span class="fas fa-user-plus"></span>
                        <span id="loginButtonText">Rejestracja</span>
                    </div>
                    <div class="navbarButton">
                        <span class="fas fa-search"></span>
                        <span id="loginButtonText">Wyszukiwarka</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarUnLogged;