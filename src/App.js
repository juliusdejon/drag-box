import React, { Component } from 'react';

import './App.css';

import Drag from './DragandDrop'

class App extends Component {
  render() {
    return (
      <div className="App ">
        <p className='Header'>
          Drag And Drop (?)
        </p>
        <Drag />
      </div>
    );
  }
}

export default App;
