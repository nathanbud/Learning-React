import React from 'react'

const SearchBar  =(props)=>{

    const handleSearch = (e) => {
        let search = e.target.value;
        console.log(search);
        
    }

    return(
        <div className="searchBar">
           <input type="text" value="Enter a keyword"/><button onClick = {handleSearch}>Search</button>
        </div>

    )
}


export default SearchBar;