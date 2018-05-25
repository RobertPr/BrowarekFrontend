import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/login/Login';

class App extends Component {
  render() {
    return (
      <Route exact path="/login" component={Login} />
    );
  }
}

export default App;
