import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	/* handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		register(form)
			.then(() => {
				this.setState({ registered: true });
			});
	}
	handleRepPassword = (event) => {
		const form = event.target.form;
		const validationMessage = form.RepPassword.value !== form.Password.value ?
			"Podane hasła różnią się" : ""; //pusty string oznacza że pole przeszło walidację
		event.target.setCustomValidity(validationMessage);
	} */
	render = () => {
		return (
            <React.Fragment>
            <div id="loginSpace">
                <h1 id="logowanie">Rejestracja</h1>
            </div>
            <form id="loginForm">
                <input className="form" type="UserName" placeholder="Nazwa użytkownika" />
                <input className="form" type="BirthDate" placeholder="Rok urodzenia" />
                <input className="form" type="Email" placeholder="E-mail" />
                <input className="form" type="Password" placeholder="Hasło" />
                <input className="form" type="PasswordVerify" placeholder="Powtórz hasło" />
                <input id="loginButton" type="submit" value="Załóż konto" />
            </form>
            </React.Fragment>
		);
	}
}
export default Register;