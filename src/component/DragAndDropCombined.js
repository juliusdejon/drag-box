import React, {Component} from 'react';

import './DragandDrop.css';

class Complete extends Component{

  state={
    id: this.props.id,
    name: this.props.name,
    bgColor: this.props.bgColor,

    containerId: this.props.id,
    
    hasItem: false,
  }

  // Only OnDragStart and OnDrop can access dataTransfer

  onDragStartItems(event){
    event.dataTransfer.setData('id', event.target.id);
    console.log(this.state.id);
  }


  // Just use this for the css instead of getting Data
  onDragEnterItems(event ,id){
    event.dataTransfer.setData('id2', id);
    
  }

  onDragOverContainer(event){
    event.preventDefault();
  }

  onDropContainer(event ,id2){
    let id = event.dataTransfer.getData('id');
    
    console.log('id: ',id);
    console.log('id2: ',id2);
    if(id !== id2){
      event.target.appendChild(document.getElementById(id));
      this.setState({
        id: this.state.containerId,
      }, () =>{
        console.log('Current Item ID: ' , this.state.id);
        console.log('Current Container ID: ' , this.state.containerId);
      })
    }
  }

  onDragEnterContainer(event){
    let id = event.dataTransfer.getData('id');
    let id2 = event.dataTransfer.getData('id2');
  }


  render(){
    const {id, name, bgColor} = this.state;

    return(
      <div
        onDrop={(event) => this.onDropContainer(event ,id)}
        onDragOver={(event) => this.onDragOverContainer(event)}
        onDragEnter={(event) => this.onDragEnterContainer(event)}
        
        key={id}
        className='container'
      >
        <div
          onDragStart={(event) => this.onDragStartItems(event)}
          onDragEnter={(event) => this.onDragEnterItems(event, id)}
          
          draggable

          className={'draggable '}
          style={{backgroundColor: bgColor}}
          id={id}
          key={id}
        >
          {name}
        </div>
      </div>
    );
  }
}

export default Complete;