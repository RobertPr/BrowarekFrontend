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
                <Link to="/beerSearch">
                    <div className="navbarButton">
                        <span className="fas fa-search"></span>
                        <span className="navbarButtonText">Wyszukiwarka</span>
                    </div>
                </Link>
                <Link to="/addBeer">
                    <div className="navbarButton">
                        <span className="fas fa-plus-square"></span>
                        <span className="navbarButtonText">Dodaj</span>
                    </div>
                </Link>
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

//cały przycisk w linku

{/* <Link to={props.path} title={props.title} className={`material-icons ${styles.navbarButton}`} onClick={props.onClick}>
				{props.icon}
				{props.children &&
					<span className={styles.children}>
						{props.children}
					</span>
				}
</Link>

<div id={styles.navbar}>
    <div id={styles.leftAlignedItems}>
        <div id={styles.logo}>AVOCO</div>
        <NavbarButton title="Strona główna" icon="home" path="/" />
        <NavbarButton title="Wiadomości" icon="message" path="/" />
        <NavbarButton title="Stwórz grupę" icon="add_circle" path="/addGroup" />
        <NavbarButton title="Lista grup" icon="view_list" path="/groupList" />
    </div>
    <div id={styles.rightAlignedItems}>
        <Person userId={this.props.userId} firstName={this.props.firstName} lastName={this.props.lastName} photoUrl={this.props.photoUrl}/>
        <SearchBar />
        <NavbarButton icon="exit_to_app" path="/" onClick={this.handleLogOutClick}>Wyloguj</NavbarButton>
    </div>
</div> */}