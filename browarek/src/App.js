import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AddBeer from './components/addBeer/AddBeer';
import AddBrewery from './components/addBrewery/AddBrewery';
import BreweryCard from './components/breweryCard/BreweryCard';

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/addBeer" component={AddBeer} />
      <Route exact path="/addBrewery" component={AddBrewery} />
      <Route exact path="/breweryCard" component={BreweryCard} /> {/* zmienic zeby bylo id browaru */}
      </Switch>
    );
  }
}

export default App;
