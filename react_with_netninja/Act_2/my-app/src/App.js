import React, {Component} from 'react';
import Ninjas from './Ninjas'



class App extends Component {
    state = {
    ninjas: [
      { name: "Nathan", age: "23", belt: "black", id: 1},
      { name: "Nord", age: "33", belt: "white", id: 2},
      { name: "Nard", age: "34", belt: "brown", id: 3},
      { name: "Nat", age: "23", belt: "red", id: 4}
    ]
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>My first react App</h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </header>
    </div>
  );
}
  }

export default App;
