import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimarySearchAppBar from './AppBar';
import Introduction from './Introduction';
import GeneralStockList from './GeneralStockList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar />
        <Introduction />
        <GeneralStockList />
      </div>
    )
  }
}

export default Home;