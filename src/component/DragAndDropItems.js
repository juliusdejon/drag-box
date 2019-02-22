import React, {Component} from 'react';
import './DragandDrop.css';

class DragAndDropItems extends Component{
  onDragStart(event){
    event.dataTransfer.setData('id', event.target.id);
    console.log(event.target.id);
  }

  onDragEnter(event ,id){
    event.dataTransfer.setData('id2', id);
    console.log('id2: ', id);
  }

  render(){
    const {bgColor, id, name} = this.props;
    
    return(
      <div
        onDragStart={(event) => this.onDragStart(event)}
        onDragEnter={(event) => this.onDragEnter(event, id)}
        
        draggable

        className={'draggable ' + this.props.className}
        style={{backgroundColor: bgColor}}
        id={id}
        key={id}
      >
        {name}
      </div>
    )
  }

}

export default DragAndDropItems;