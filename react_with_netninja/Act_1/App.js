class App extends React.Component{
    state = {
        name: 'Geofe',
        age: 12
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Clickk");
        console.log('submitted', this.state.name);
    }

    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        })

        
    }

    
 render(){
     return(
         <div>
             <h2>Hi my name is {this.state.name}, I'am {this.state.age} years old.</h2>
             <hr></hr>
             <form onSubmit={this.handleSubmit}>
                 <input type="text" onChange = {this.handleChange}/>
                <button>Submit</button>
             </form>

         </div>
     )
 }   
}

ReactDOM.render(<App/>, document.getElementById('root'));