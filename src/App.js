import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TypeAheadView from './component/typeahead.comp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TypeAheadView />
      </div>
    );
  }
}

export default App;
