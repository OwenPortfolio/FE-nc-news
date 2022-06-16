import {getComments} from '../utils/api'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CommentCard from '../components/CommentCard';
import PostComment from '../components/PostComment';

const Comments = ({user}) => {
    const {article} = useParams();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getComments(article).then((commentsByArticleId) => {
            setComments(commentsByArticleId.comments);
            setLoading(false);
        });
    }, [article]);


    if (loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h2>Comments:</h2>
        <div>
            <PostComment user={user} article={article}/>
        </div>
        <ul id='CommentList'>
            {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} user={user} comment={comment}/>
            })}
        </ul>
        </>
    )}
}
export default Comments;