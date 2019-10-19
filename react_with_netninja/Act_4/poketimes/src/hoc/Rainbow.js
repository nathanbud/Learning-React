import React from 'react'

const Rainbow = (WrappedComponent) =>{
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet'];
    const selectColor = colors[Math.floor(Math.random()*6)];
    const color = selectColor + '-text';

    return (props) =>{
        return(
            <div className = {color} >
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow
