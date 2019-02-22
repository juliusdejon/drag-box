import React, {Component} from 'react';
import './DragandDrop.css'

import Items from './DragAndDropItems';

class DragandDrop2 extends Component{

  onDragOver(event){
    event.preventDefault();
  }

  onDrop(event){
    let id = event.dataTransfer.getData('id');
    let id2 = event.dataTransfer.getData('id2');
    
    console.log('id: ',id);
    if(id !== id2){
      event.target.appendChild(document.getElementById(id));
    }else{
      event.dataTransfer.clearData('id2');
      event.dataTransfer.clearData('id')
    }
    
    event.dataTransfer.clearData('id');
  }

  onDragEnter(event){
    let id = event.dataTransfer.getData('id');
    let id2 = event.dataTransfer.getData('id2');

    if(id !== id2){
      console.log('not same');
    }else{
      console.log('same');
    }
  }


  render(){
    const items = this.props.items;

    return(
      <div
        onDrop={(event) => this.onDrop(event)}
        onDragOver={(event) => this.onDragOver(event)}
        onDragEnter={(event) => this.onDragEnter(event)}

        id={items.id}
        className='firstContainer'
      >
        <Items id={items.id} name={items.name} bgColor={items.bgColor} />
      </div>
    )
  }
}

export default DragandDrop2;