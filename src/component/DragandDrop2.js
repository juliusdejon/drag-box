import React, {Component} from 'react';
import DragAndDropItems from './DragAndDropItems'
import './DragandDrop.css'

class DragandDrop2 extends Component{
  onDragOver(event){
    event.preventDefault();
  }

  onDrop(event){
    let id = event.dataTransfer.getData('id');
    let id2 = event.dataTransfer.getData('id2')

    if(event.target.id !== id){
      event.target.appendChild(document.getElementById(id));
      
      event.dataTransfer.clearData('id');
      event.dataTransfer.setData('id', id2);
      
      console.log('onDrop id2: ', id2);
    }

    event.dataTransfer.clearData('id');
    
  }

  render(){
    const first = this.props.items;

    const firsts = <DragAndDropItems id={first.id}
    name={first.name}
    bgColor={first.bgColor} 
    />;

    return(
      <div
        onDrop={(event) => this.onDrop(event)}
        onDragOver={(event) => this.onDragOver(event)}
        id={first.id}
        className='firstContainer'
      >
        {firsts} 
      </div>
    )
  }
}

export default DragandDrop2;