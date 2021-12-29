import React from 'react'

function SearchCoin({search}) {

    function handleCurrency(e){
        e.preventDefault();
        const query = e.target.value; 
        search(query)
        }

    return (
        <input type="search" 
        name="search"
        autoComplete='off'
        onChange={handleCurrency} 
        placeholder='Search'/>
    )
}

export default SearchCoin;
