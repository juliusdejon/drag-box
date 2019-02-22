import React,{Component} from 'react';

class Container extends Component{
  state={
    basket: this.props.container,
    onTop: false,
  }

  onDropContainer(event){
    const id = event.dataTransfer.getData('id');
    const basket = this.state.basket;

    this.setState({
      basket: basket.push(id),
    });
  }

  onDragEnter(){
    this.setState({
      onTop: true,
    })
  }

  onDragLeave()

  render(){
    return(
      <div
        onDrop={(event) => this.onDropContainer(event)}
        onDragEnter={() => this.onDragEnterContainer()}
      >
        {this.props.children}
      </div>
    )
  }
}