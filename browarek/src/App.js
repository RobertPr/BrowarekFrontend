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

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* {props.logged} ? <NavbarLogged /> : <NavbarUnLogged />  zmienic na to jak bedzie wiadomo co z logowaniem */}
        <NavbarLogged />
        <Switch>
          <Route exact path="/home" component={MainScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addBeer" component={AddBeer} />
          <Route exact path="/addBrewery" component={AddBrewery} />
          <Route exact path="/breweryCard" component={BreweryCard} /> {/* zmienic zeby bylo id browaru */}
          <Route exact path="/beerCard" component={BeerCard}/> {/* zmienic zeby bylo id piwa */}
          <Route exact path="/beerSearch" component={BeerSearch}/>
          <Route exact path="/brewerySearch" component={BrewerySearch}/>
          <Route exact path="/beerResults" component={BeerResults}/>
          <Route exact path="/breweryResults" component={BreweryResults}/>
          <Route exact path="/nav" component={NavbarLogged}/> {/* test only */}
          <Route exact path="/navun" component={NavbarUnLogged}/> {/* test only */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
