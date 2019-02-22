import React, { Component } from 'react';

import './App.css';

// import Drag from './component/DragandDrop2';

import DragContainer from './component/DragandDrop2';

import DragCom from './component/DragAndDropCombined';

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

class App2 extends Component{
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
                  <DragCom id={first.id} name={first.name} bgColor={first.bgColor} />
                </td>
                <td> 
                 <DragCom id={second.id} name={second.name} bgColor={second.bgColor} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>  
                  <DragCom id={third.id} name={third.name} bgColor={third.bgColor} />
                </td>
              </tr>
            </tbody>
            
          </table>
         
        </div>
      </div>
    );
  }
}

export default App2;
