import React, {Component} from 'react';

class Swap extends Component{
  state={
    first: this.props.first,
    second: this.props.second
  }

  onClick(first, second){
    this.setState({
      first: second,
      second: first,
    })
    
    console.log('first: ' + first + ' second: ' + second);
  }
  
  render(){
    let {first, second} = this.state;

    return(
      <div>
        <p>
          {first} swap {second}
        </p>
        <button onClick={() => this.onClick(first, second)}>Click to Swap</button>
      </div>
    );
  }

}

export default Swap;