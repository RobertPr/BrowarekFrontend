import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

class Register extends React.Component {
	state = {}

	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const data = {
			EmailAddress: form.Email.value,
			FirstName: form.FirstName.value,
			LastName: form.LastName.value,
			Password: form.Password.value,
			ConfirmPassword: form.PasswordVerify.value
		};
		axios.post(`/authentication/register`, data)
			.then(() => {
				this.setState({ registered: true });

			});
	}
	handleRepPassword = (event) => {
		const form = event.target.form;
		const validationMessage = form.PasswordVerify.value !== form.Password.value ?
			"Podane hasła różnią się" : ""; //pusty string oznacza że pole przeszło walidację
		event.target.setCustomValidity(validationMessage);
	}

	handleBirthDate = (event) => {
		const validationMessage = (new Date()).getFullYear() - parseInt(event.target.value) >= 18 ? "" : "Musisz mieć 18 lat by móc założyć konto";
		event.target.setCustomValidity(validationMessage);
	}

	render = () => {
		return (
			<React.Fragment>
				{this.state.registered && <Redirect to="/login" />}
				<div id="loginSpace">
					<h1 id="logowanie">Rejestracja</h1>
				</div>
				<form id="loginForm" onSubmit={this.handleSubmit}>
					<input className="form" name="FirstName" placeholder="Nazwa użytkownika" />
					<input className="form" name="LastName" placeholder="Nazwa użytkownika" />
					<select defaultValue={2018} className="form" name="BirthDate" placeholder="Rok urodzenia" onInput={this.handleBirthDate}>
						{[...Array(100).keys()].map(value =>
							<option key={value + 1918} value={value + 1918}>
								{value + 1918}
							</option>)}
					</select>
					<input className="form" name="Email" placeholder="E-mail" />
					<input className="form" type="password" name="Password" placeholder="Hasło" />
					<input className="form" type="password" name="PasswordVerify" placeholder="Powtórz hasło" onInput={this.handleRepPassword} />
					<input id="loginButton" type="submit" value="Załóż konto" />
				</form>
			</React.Fragment>
		);
	}
}
export default Register;