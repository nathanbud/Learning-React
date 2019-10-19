import React, {Component} from 'react'
import axios from 'axios'

class Posts extends Component{

    state ={
        id :null,
        post: null
    }
    
    componentWillMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(res =>{
           this.setState({
            id,
            post: res.data
        })
        })

        
    }
    render(){
        const {post} = this.state;
        const postContent = post ? (
           <div className="center">
               <h4 className="center">{post.title}</h4>
               <p>{post.body}</p>
            </div>
            
            
        ) :
         (<div>
            <span className="center">Loading</span>
            </div>)

        return(
            <div>
            <div className="center">Post No: {this.state.id}</div>
            <div className="center">{postContent}</div>
            </div>
        )
    }
}

export default Posts