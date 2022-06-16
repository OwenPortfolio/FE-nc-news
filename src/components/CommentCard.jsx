import DeleteComment from '../components/DeleteComment';

const CommentCard = (data) => {

    let comment = data.comment;
    let user = data.user;
    let author = data.comment.author;

    return <li className='commentCards' key={comment.comment_id}>
    <div>
        <h4 className='author'>{author}:</h4>
        <p>{comment.body}</p>
        <DeleteComment user={user} author={comment.author}/>
    </div>
</li>
}

export default CommentCard;