import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import SmurfsList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';

import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav-links">
            <NavLink exact to="/">Add Smurf</NavLink>
            <NavLink exact to="/smurfs">Smurfs</NavLink>

          </nav>
          <h1 className="title">ReduxstaSmurfs</h1>
          <Route exact path="/" component={AddSmurfForm} />
          <Route path="/smurfs" component={SmurfsList} />
        </div>
      </Router>
    );
  }
}

export default App;