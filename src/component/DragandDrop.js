import React, {Component} from 'react';
import './DragandDrop.css'

class DragandDrop extends Component{

  state ={
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
    boxContents: [
      {
        name: 'Hello World',
        category: 'first',
        bgColor: 'BLUE',
      },
      {
        name: 'Good bye World',
        category: 'second',
        bgColor: 'ORANGE',
      }
    ]
  }

  onDragOver = (event, id) =>{
    event.preventDefault();
  }

  onDragStart = (event, id) =>{
    console.log('dragstart: ', id);
    event.dataTransfer.setData("id", id);
  }

  onDrop = (event, cat) =>{
    let id = event.dataTransfer.getData('id');
    let boxContents = this.state.boxContents.filter((boxContents) =>{
      if(boxContents.name === id){
        boxContents.category = cat;
      }
      return boxContents;
    });

    this.setState({
      ...this.state,
      boxContents,
    });
  }

  onDragEnter(event, id){
    console.log('dragEnter: ', id);
    event.dataTransfer.setData("id2", id);
  }

  onDragLeave(event){
    event.dataTransfer.clearData('id2');
  }



  render(){
    const boxContents ={
      first: [],
      second: []
    };

    this.state.boxContents.forEach((things) =>{
      boxContents[things.category].push(
        <div
          key={things.name}
          onDragStart={(event) => this.onDragStart(event, things.name)}
          onDragEnter={(event) => this.onDragEnter(event, things.name)}
          onDragLeave={(event) => this.onDragLeave(event)}
          draggable
          className='draggable'
          style={{backgroundColor: things.bgColor}}>

           {things.name}

        </div>
      )
    });

    return(
      <div className='containerDrag'>
        
        <div className='draggable firstContainer' onDragOver={(event) => this.onDragOver(event)}
         onDrop={(event) => this.onDrop(event, 'first')}>
          <span>First</span>
          {boxContents.first}
        </div>

        <div className='dragabble secondContainer' onDragOver={(event) => this.onDragOver(event)}
          onDrop={(event) => this.onDrop(event, 'second')}>
          <span>Second</span>
          {boxContents.second}
        </div>

      </div>
    );

  }

}



export default DragandDrop;