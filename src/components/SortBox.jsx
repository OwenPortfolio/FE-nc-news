import {useState} from 'react';

const SortBox = (sort, setSort, sortOrder, setSortOrder) => {
    console.log(setSort)
    function sorting(event){
        setSort(event.target.innerText)
    }

    function ordering(event){
        console.log(event)
    }

    return (<div>
        <h4>Sort By: <button onClick={sorting}>Topic</button> 
        <button onClick={sorting}>Author</button>
        <button onClick={sorting}>Comments</button>  
        <button onClick={ordering}>Ascending / Descending</button>
        </h4>
    </div>
    )
}

export default SortBox;