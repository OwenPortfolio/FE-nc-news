import {getComments} from '../utils/api'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CommentCard from '../components/CommentCard';
import PostComment from '../components/PostComment';

const Comments = ({user}) => {
    const {article} = useParams();

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [latestComment, setLatestComment] = useState('') 
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        getComments(article).then((commentsByArticleId) => {
            setComments(commentsByArticleId.comments);
            setLoading(false);
        });
    }, [update]);

    if (loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h2>Comments:</h2>
        <div>
            <PostComment setLatestComment={setLatestComment} setUpdate={setUpdate} user={user} article={article}/>
            <h3>{latestComment}</h3>
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