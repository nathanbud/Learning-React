import React from 'react'

function Button(){

    const [name, setName] = React.useState('JOger');

    const handleClick = () =>{
        return setName("new Name");
    }

    return(
        <div>
            <h1>Welcome: {name}</h1>
            <button onClick={handleClick}>Change the text</button>
        </div>
    );
}

export default Button;