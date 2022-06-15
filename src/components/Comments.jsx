import {getComments} from '../utils/api'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CommentCard from '../components/CommentCard';

const Comments = (seeComment) => {
    
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
        <button>Comment: {currentArticle.comment_count}</button>
        <ul id='CommentList'>
            {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
            })}
        </ul>
        </>
    )}
}
export default Comments;