import React, {Component} from 'react';

class Items extends Component{
  onDragStartItems(event, id){
    event.dataTransfer.setData()
  }

  render(){
    const items = this.props.items;

    const {id, name, bgColor} = items;

    return(
      <div
        onDragStart={(event) => this.onDragStartItems(event, id)}
        
        draggable
        style={{backgroundColor: bgColor}}
      >
        {name}
      </div>
    );
  }

}

export default Items;