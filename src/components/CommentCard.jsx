
const CommentCard = (comment) => {
    comment = comment.comment;
    return <li className='commentCards' key={comment.comment_id}>
    <div>
        <h4 className='author'>{comment.author}:</h4>
        <p>{comment.body}</p>
    </div>
</li>
}

export default CommentCard;