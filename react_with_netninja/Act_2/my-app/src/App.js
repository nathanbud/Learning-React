import React, {Component} from 'react';
import Ninjas from './Ninjas'
import AddNinja from './Forms/AddNinja';



class App extends Component {
    state = {
    ninjas: [
      { name: "Nathan", age: "23", belt: "black", id: 1},
      { name: "Nord", age: "33", belt: "white", id: 2},
      { name: "Nard", age: "34", belt: "brown", id: 3},
      { name: "Nat", age: "23", belt: "red", id: 4}
       ]
    }

    addNinja = (ninja) =>{
    ninja.id = Math.floor(Math.random()*100);
    let ninjas = [...this.state.ninjas, ninja ]
     this.setState({
      ninjas: ninjas
     })
    }

    deleteNinja = (id) =>{
      let ninjas = this.state.ninjas.filter(ninja =>{
        return ninja.id !== id;
      })
      this.setState({
        ninjas: ninjas
       })
    }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>My first react App</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja = {this.deleteNinja}/>
      </header>
      <section add-ninja_form="">
        <AddNinja addNinja = {this.addNinja}/>
      </section>
    </div>
  );
}
  }

export default App;
