import React, { Component } from 'react';

import './App.css';

// import Drag from './component/DragandDrop2';

import Drag from './component/DragandDrop2'

class App extends Component {
  state={
    first: {
      name: 'Hello World',
      category: 'first',
      bgColor: 'BLUE',
    },
    second:{
      name: 'Good bye World',
      category: 'second',
      bgColor: 'ORANGE',
    },
  }
  render() {
    return (
      <div className="App ">
        <p className='Header'>
          Drag And Drop (?)
        </p>
        <Drag items={this.state.first}/>
        <Drag items={this.state.second}/>

      </div>
    );
  }
}

export default App;
