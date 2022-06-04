import React from 'react';

const Search = ({handleSearchNote}) =>{

    return (

        <div className="search fs-4  m-3 justify-content-center" >
        <i class="bi bi-search-heart-fill f2-2"></i>
        <input  onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="type to search" />
        
    </div>
         );
}

export default Search;