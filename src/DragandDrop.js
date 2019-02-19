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

class DragAndDropItems extends Component{
  onDragStart(event){
    event.dataTransfer.setData('id', event.target.key);
  }

  onDragOver(event){
    event.preventDefault();
  }

  onDrop(event){
    let id = event.dataTransfer.getData('id');

    event.target.appendChild(document.getElementById(id));
  }

  onDragEnter(event){
    event.dataTransfer.setData('id2', event.target.key);
    console.log('id2: ', event.target.key);
  }

  onDragLeave(event){
    event.dataTransfer.clearData('id2');
  }

  render(){
    const {id, bgColor, name}= this.props;
    return(
      <div
        onDrop={(event) => this.onDrop(event)}
        onDragOver={(event) => this.onDragOver(event)}
      >

         <div
          onDragStart={(event) => this.onDragStart(event)}

          onDragEnter={(event) => this.onDragEnter(event)}
          onDragLeave={(event) => this.onDragLeave(event)}
          draggable
          className='draggable'
          style={{backgroundColor: bgColor}}
          id={id}
        >
          {name}
        </div>
      </div>
       
    
    )
  }

}

class DragandDrop2 extends Component{
  constructor(props){
    super(props);

    this.state={
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
    }
  }

  render(){
    const {first, second} = this.state;


    const firsts = <DragAndDropItems id={first.id}
    name={first.name}
    bgColor={first.bgColor} 
    />;

    const seconds = <DragAndDropItems id={second.id}
    name={second.name}
    bgColor={second.bgColor} 
    />;

    return(
      <div>
        <div className='draggable firstContainer'>
          {firsts}
        </div>
        
        <div className='draggable firstContainer'>
         {seconds}
        </div>
      </div>
    )
  }
}

export default DragandDrop;