import {getComments} from '../utils/api'
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
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
    }, []);

    if (loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h2>Comments:</h2>
        <ul id='CommentList'>
            {comments.map((comment) => {
                    return <CommentCard comment={comment}/>
            })}
        </ul>
        </>
    )}
}
export default Comments;