import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Posts from './Components/Posts'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/:post_id' component={Posts}/>
        </Switch>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
