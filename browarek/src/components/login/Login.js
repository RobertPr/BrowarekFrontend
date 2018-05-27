import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from "react-router-dom";


class Login extends React.Component {
	state = { error: "" };

	handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		axios.post('/authentication/login', { Email: form.email.value, Password: form.password.value})
			.then((response) => {
				const token = response.data.token;
				const userId = response.data.userId;
				this.props.onLogin(token, userId);
			})
			.catch((error) => {
				console.log(error);
				if (error.response && error.response.status === 401)
					this.setState({ error: "Nieprawidłowe dane logowania" });
				else if (error.request)
					this.setState({ error: "Serwer nie odpowiada" });
			});
	}
	render = () => {
		return (
            <React.Fragment>
            <div id="loginSpace">
                <h1 id="logowanie">Logowanie</h1>
            </div>
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <input name="email" className="form" type="Email" placeholder="E-mail" required/>
                <input name="password" className="form" type="Password" placeholder="Hasło" required/>
                <input id="loginButton" type="submit" value="Zaloguj" />
            </form>
            </React.Fragment>
		);
	}
}
/*const mapDispatchToProps = (dispatch) => ({
	authorize: (token) => dispatch(authActionCreators.authorize(token)),
	saveTokenData: (data) => dispatch(userActionCreators.saveTokenData(data))
});
export default connect(null, mapDispatchToProps)(Login); */

export default withRouter(Login);