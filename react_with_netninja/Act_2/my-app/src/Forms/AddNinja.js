import React, {Component} from 'react'

class AddNinja extends Component{
    state = {
        name: null,
        age: null,
        belt:null,
        id: null
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    handleChange = (e) =>{
       this.setState({
        [e.target.id]: e.target.value,
       })
    }

    
    render(){
        
        return(
            <div className="add-ninja">
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja