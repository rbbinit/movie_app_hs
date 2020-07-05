import React from 'react';

class App extends React.Component {
  
    constructor(props){
      super(props);
      console.log('hi');  
  };

  state ={
  count : 0, 
  };

  add = () =>
  {
    this.setState({count: this.state.count+1})
  }

  minus = () =>
  {
    this.setState({count: this.state.count -1})
  }

  componentDidMount() {
    console.log('component rendered');
  }
  
  componentDidUpdate(){
    console.log('i just updated');
  }

  componentWillUnmount() {
    console.log('goodbye component')
  }

  render() {
    console.log('render');
    
    return (
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )

  }
}

export default App;