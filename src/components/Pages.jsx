const Pages = (props) => {
    console.log(props)
    function changePage(event){
        if(event.target.innerText === 'Next'){
            props.setPage(props.page + 1)
        } else {
            props.setPage(props.page - 1)
        }

    }

    function previous(){
        if(props.page > 0){
            return <button class='pageButton' onClick={changePage}>Previous </button>
        }
    }
    function next(){
        if(props.page + 1 < props.maxPage){
            return <button class='pageButton' onClick={changePage}>Next </button>
        }

    }
    return (
        <div id='Pagination'>
            {previous()}
            <h2>Page: {props.page + 1} </h2>
            {next()}
        </div>
        )
    
}

export default Pages;