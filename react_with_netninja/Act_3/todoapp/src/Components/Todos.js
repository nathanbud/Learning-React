import React from 'react'

const Todos = ({todos, deleteTodo}) =>{
    
    const todoList = todos.length ? (
        todos.map(todo =>{
            return <div className="collection-item" key={todo.id} onClick = {() => {deleteTodo(todo.id)}}>
                        <span>{todo.content}</span>
                    </div> 
        })
    ) : 
        <h3> Nothing to do today. Yay!</h3>
    
    return(
        <div className="todos collection">  
            <div>{todoList}</div>
        </div>
    )
}

export default Todos