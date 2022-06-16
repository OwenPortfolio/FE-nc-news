import {useState} from 'react';
import {postComment} from '../utils/api'

const PostComment = (props) => {

    const {article, user, setLatestComment, setUpdate} = props

    const [comment, setComment] = useState();
    const [commentStatus, setCommentStatus] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        postComment(article, comment, user)
        .then((res) => {
            if(res.status === 201){
                setCommentStatus('Comment Posted')
                setLatestComment(`You Posted: ${comment}`)
                setTimeout(
                    function (){
                        setCommentStatus('')
                        setLatestComment('')
                        setUpdate(true)
                    }, 1500
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