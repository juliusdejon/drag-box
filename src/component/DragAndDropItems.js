import React, {Component} from 'react';
import './DragandDrop.css';

class DragAndDropItems extends Component{
  onDragStart(event){
    event.dataTransfer.setData('id', event.target.id);
  }

  onDragEnter(event, id){
    if(id === event.target.id){
      event.dataTransfer.setData('id2', event.target.id);
      console.log('id2: ', event.target.id);
    }
  }

  onDragLeave(event){
    let id = event.dataTransfer.getData('id');
    let id2 = event.dataTransfer.getData('id2');

    if (id !== id2){
      event.dataTransfer.clearData('id2');
    }
    
  }

  render(){
    const {id, bgColor, name}= this.props;
    return(
      <div
        onDragStart={(event) => this.onDragStart(event)}
        onDragEnter={(event) => this.onDragEnter(event, id)}
        onDragLeave={(event) => this.onDragLeave(event)}
        
        draggable

        className='draggable'
        style={{backgroundColor: bgColor}}
        id={id}
      >
        {name}
      </div>
    )
  }

}

export default DragAndDropItems;