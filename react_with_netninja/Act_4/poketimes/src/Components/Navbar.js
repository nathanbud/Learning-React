import React from 'react'
import{Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) =>{
    //programmatic redirects
    // setTimeout(() =>{
    //     props.history.push('/about');
    // },10000)
    return(
       <nav className="nav-wrapper red darken-3">
           <div className="container">
               <a href="" className="brand-logo">Website</a>
               <ul className="right">
                   <li><NavLink exact to='/'>Home</NavLink></li>
                   <li><NavLink to='/about'>About</NavLink></li>
                   <li><NavLink to='/contact'>Contact</NavLink></li>
               </ul>
           </div>
       </nav>
    )
}

export default withRouter(Navbar)