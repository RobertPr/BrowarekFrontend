import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AddBeer from './components/addBeer/AddBeer';
import AddBrewery from './components/addBrewery/AddBrewery';
import BreweryCard from './components/breweryCard/BreweryCard';
import BeerCard from './components/beerCard/BeerCard';
import BeerSearch from './components/beerSearch/BeerSearch';
import BrewerySearch from './components/brewerySearch/BrewerySearch';
import BeerResults from './components/beerResults/BeerResults';
import BreweryResults from './components/breweryResults/BreweryResults';
import NavbarLogged from './components/navbarLogged/NavbarLogged';
import NavbarUnLogged from './components/navbarUnlogged/NavbarUnLogged';
import MainScreen from './components/mainScreen/MainScreen';
import axios from 'axios';

class App extends Component {
  state = {}
  onLogin = (token, userId) => {
    this.setState({ token, userId });
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    this.props.history.push("/");
  }
  onLogOut = () => {
    this.setState({ token: undefined, userId: undefined });
    delete axios.defaults.headers.common['Authorization'];
  }
  render() {
    return (
      <React.Fragment>
        {this.state.token ? <NavbarLogged userId={this.state.userId} onLogOut={this.onLogOut}/> : <NavbarUnLogged /> }
        <Switch>
          <Route exact path="/" component={() => <MainScreen token={this.state.token} />} />
          <Route exact path="/login" render={() => <Login onLogin={this.onLogin}/>} /> {/* niestety chyba tak trzeba zeby propsy przekazac :/  */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/addBeer" component={AddBeer} />
          <Route exact path="/addBrewery" component={AddBrewery} />
          <Route exact path="/breweryCard/:breweryId" component={BreweryCard} /> 
          <Route exact path="/beerCard/:beerId" component={BeerCard} /> {/* zmienic zeby bylo id piwa */}
          <Route exact path="/beerSearch" component={BeerSearch} />
          <Route exact path="/brewerySearch" component={BrewerySearch} />
          <Route exact path="/nav" component={NavbarLogged} /> {/* test only */}
          <Route exact path="/navun" component={NavbarUnLogged} /> {/* test only */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
