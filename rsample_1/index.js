import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const Main = () =>{
    return(
        <div>
            <App/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))