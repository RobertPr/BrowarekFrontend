import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AddBeer from './components/addBeer/AddBeer';

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/addBeer" component={AddBeer} />
      </Switch>
    );
  }
}

export default App;
