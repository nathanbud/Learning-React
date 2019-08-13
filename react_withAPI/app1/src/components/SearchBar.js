import React, {useState} from 'react'

const SearchBar  =(props)=>{

    const [search, setSearch] = useState([]);

    function handleSearch(e)  {
        let searche = e.target.value;
        console.log(searche);
        
    }

    return(
        <div className="searchBar">
           <input type="text" value={search} onChange = {handleSearch}/>
        </div>

    )
}


export default SearchBar;