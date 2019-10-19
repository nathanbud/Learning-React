import React, {Component} from 'react';
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'


class App extends Component {
  
  state = {
    todos:[
      {id: 1, content: "Buy milk"},
      {id: 2, content: "Buy medicine"}

    ]
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos: todos
    })
  }



  addTodo = (newtodo) => {
    newtodo.id = Math.random();
    let todos = [...this.state.todos, newtodo]; 
    this.setState({
      todos
    })
  }



  render(){
  return (
    <div className="App">
      <header className="App-header center">
        <h3>What to do Today</h3>
      </header>
      <div className="todos-container container">
        <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo} />
      </div>
    </div>
  );
}
}

export default App;
