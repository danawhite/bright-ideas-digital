import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Roadmap from './components/roadmaps/roadmap';

class App extends Component {
  render() {
    return (
        <Roadmap client="Larry Lewis"/>
    );
  }
}

export default App;
