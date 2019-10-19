import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import warrior from '../img/warrior.jpg'

class Home extends Component{

    state= {
        posts: []
    }

   componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res);
            this.setState({
                posts:res.data.slice(0,10)
            })
        })

   } 
   render(){
       const {posts} = this.state;
       const postsList = posts.length ? (posts.map(post =>{
           return (<div className="post card" key={post.id}>
                    <div className="card-content">
                        <img src={warrior} alt=""/>
                        <Link to={'/'+ post.id}>
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                
            </div>)
    })) : (<div>No posts available</div>)

    return(
        <div className="container">
            <h4 className="center">Home</h4>
            {postsList}
            <p>lorem</p>
        </div>
    )
   }
}

export default Home