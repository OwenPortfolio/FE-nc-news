const SortBox = (props) => {
    const {setSort, setSortOrder, setPage} = props;
    
    function sorting(event){
        setSort(event.target.innerText.toLowerCase())
        setPage(0)
    }

    function ordering(event){
        setSortOrder(event.target.innerText.toLowerCase())
    }

    return (<div id='SortBox'>
        <h4>Sort By: <button onClick={sorting}>Topic</button> 
        <button onClick={sorting}>Author</button>
        <button onClick={sorting}>Date</button>
        <button onClick={sorting}>Comments</button>  
        <button onClick={ordering}>Asc</button>
        <button onClick={ordering}>Desc</button>
        </h4>
    </div>
    )
}

export default SortBox;