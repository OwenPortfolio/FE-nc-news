import {useState} from 'react';
import {postComment} from '../utils/api'

const PostComment = (data) => {
    const [comment, setComment] = useState();
    const [commentStatus, setCommentStatus] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        postComment(data.article, comment, data.user)
        .then((res) => {
            if(res.status === 201){
                setCommentStatus('Comment Posted')
                setTimeout(
                    function (){
                        setCommentStatus('')
                    }, 2500
                )
            } else {
                setCommentStatus('Something Went Wrong')
            }
        })
    }


    return (
        <div>
            <h2>{commentStatus}</h2>
            <form onSubmit={handleSubmit}>
                <input id='CommentBox' onChange={(event) => setComment(event.target.value)}></input>
                <button type='submit'>Post Comment</button>
            </form>
        </div>
    )
}

export default PostComment;