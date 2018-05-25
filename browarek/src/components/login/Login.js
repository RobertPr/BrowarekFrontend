import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: "" };
	}
	/*handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		login(form)
			.then((response) => {
				const token = response.data.token;
				setAuthorizationHeader(token);
				this.props.authorize(token);
				saveToken(token);
				const data = getDataFromToken(token)
				this.props.saveTokenData(data);
			})
			.catch((error) => {
				console.log(error);
				if (error.response && error.response.status === 401)
					this.setState({ error: "Nieprawidłowe dane logowania" });
				else if (error.request)
					this.setState({ error: "Serwer nie odpowiada" });
			});
	}*/
	render = () => {
		return (
            <React.Fragment>
            <div id="loginSpace">
                <h1 id="logowanie">Logowanie</h1>
            </div>
            <form id="loginForm">
                <input class="form" type="Email" placeholder="E-mail" />
                <input class="form" type="Password" placeholder="Hasło" />
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

export default Login;