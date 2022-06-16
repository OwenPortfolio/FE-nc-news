import DeleteComment from '../components/DeleteComment';
import {useState} from 'react'

const CommentCard = (data) => {
    let comment = data.comment;
    let user = data.user;
    let author = data.comment.author;

    const [deleted, setDeleted] = useState(false);

    if(!deleted){
        return <li className='commentCards' key={comment.comment_id}>
        <div>
            <h4 className='author'>{author}:</h4>
            <p>{comment.body}</p>
            <DeleteComment setDeleted={setDeleted} user={user} author={comment.author} id={comment.comment_id}/>
        </div>
    </li>
    }

}

export default CommentCard;