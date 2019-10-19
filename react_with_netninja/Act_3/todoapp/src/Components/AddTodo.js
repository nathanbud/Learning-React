import React, {Component} from 'react'

class AddTodo extends Component{
state= {
    content: '',
}

handleSubmit = (e) =>{
e.preventDefault();
console.log(this.props.addTodo(this.state));
this.setState({
    content: ''
})
}
    
handleChange = (e) =>{
    this.setState({
    content: e.target.value
    }) 
}

render(){
    return(
        <div>
            <form action="" onSubmit = {this.handleSubmit}>
            <input type="text" onChange = {this.handleChange} value = {this.state.content}/>
            </form>
            
        </div>
    )
}
    
   
}

export default AddTodo