import React, {Component} from 'react';

class Complete extends Component{

  onDragStart(event){
    event.dataTransfer.setData('id', event.target.id);
    console.log(event.target.id);
  }

  onDragEnter(event ,id){
    event.dataTransfer.setData('id2', id);
    console.log('id2: ', id);
  }

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
    return(
      <div>

      </div>
    );
  }
}