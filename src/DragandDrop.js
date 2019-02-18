import React, {Component} from 'react';

class DragandDrop extends Component{

  state ={
    boxContents: [
      {
        name: 'Hello World',
        category: 'first',
        bgColor: 'BLUE',
      },
      {
        name: 'Hey, Listen!',
        category: 'first',
        bgColor: 'PINK',
      },
      {
        name: 'Look, AHA!',
        category: 'first',
        bgColor: 'YELLOW',
      },
      {
        name: 'Good bye World',
        category: 'second',
        bgColor: 'ORANGE',
      }
    ]
  }

  onDragOver = (event) =>{
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
          draggable
          className='draggable'
          style={{backgroundColor: things.bgColor}}>

           {things.name}

        </div>
      )
    });

    return(
      <div className='containerDrag'>
        
        <div className='firstContainer' onDragOver={(event) => this.onDragOver(event)}
         onDrop={(event) => this.onDrop(event, 'first')}>
          <span>First</span>
          {boxContents.first}
        </div>

        <div className='droppable' onDragOver={(event) => this.onDragOver(event)}
          onDrop={(event) => this.onDrop(event, 'second')}>
          <span>Second</span>
          {boxContents.second}
        </div>
      </div>
    );

  }

}

export default DragandDrop;