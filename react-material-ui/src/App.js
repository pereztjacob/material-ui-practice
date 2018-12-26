import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from './components/AppBar';
import Introduction from './components/Introduction';
import GeneralStockList from './components/GeneralStockList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar />
        <Introduction />
        <GeneralStockList />
      </div>
    );
  }
}

export default App;
