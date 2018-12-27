import React, { Component } from 'react';
import { BrowserRouter as Router, StaticRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>

      </div>
      </Router>


    );
  }
}

export default App;
