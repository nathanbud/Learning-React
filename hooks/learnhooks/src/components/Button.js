import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function Button(){

    const [name, setName] = useState('JOger');
    const [add, setAdd] = useState(0);
    const [subtract, setSubtract] = useState(0);

    const handleClick = () =>{
        return setName("new Name");
    }

    const handleSubtract = () =>{
        return setSubtract(subtract - 1 );
    }

    const handleAdd = () =>{
        return setAdd(add + 1 );
    }

    return(
        <div>
            <h1>Welcome: {name}</h1>
            <button onClick={handleClick}>Change the text</button>
            <p onClick={handleSubtract}>- {subtract}</p>
            <p onClick={handleAdd}>+ {add}</p>
            <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon="coffee" />
        </div>
    );
}

export default Button;