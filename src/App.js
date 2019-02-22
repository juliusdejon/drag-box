import React, { Component } from 'react';

import './App.css';

// import Drag from './component/DragandDrop2';

import DragContainer from './component/DragandDrop2';
// import DragItems from './component/DragAndDropItems';

class App extends Component {
  state={
    first: {
      name: 'Hello World',
      id: 'first',
      bgColor: 'BLUE',
    },
    second:{
      name: 'Good bye World',
      id: 'second',
      bgColor: 'ORANGE',
    },
    third:{
      name: 'Third',
      id: 'third',
      bgColor: 'YELLOW',
    }
  }
  render() {
    const {first, second, third} = this.state;

    return (
      <div className="App ">
        <p className='Header'>
          Drag And Drop (?)
        </p>
        <div className='containerDrag'>
          <table>
            <tbody>
              <tr>
                <td> 
                  <DragContainer items={first}/>
                </td>
                <td> 
                  <DragContainer items={second} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>  
                  <DragContainer items={third} />
                </td>
              </tr>
            </tbody>
            
          </table>
         
        </div>
      </div>
    );
  }
}

export default App;
