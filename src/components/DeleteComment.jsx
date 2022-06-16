const DeleteComment = (data) => {
    
    if(data.user === data.author) {
        return (
            <button>Delete Comment?</button>
        )
    }    

}

export default DeleteComment;