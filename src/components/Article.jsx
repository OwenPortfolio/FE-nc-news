import {getArticleById} from '../utils/api'
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import VoteButton from '../components/VoteButton';
import Comments from '../components/Comments';

const Article = ({user}) => {
    const {article} = useParams();
    const [currentArticle, setCurrentArticle] = useState();
    const [loading, setLoading] = useState(true);
    const [votes, setVotes] = useState(0);
    const [seeComments, setSeeComments] = useState(false);

    useEffect(() => {
        getArticleById(article).then((articleById) => {
            setCurrentArticle(articleById.article);
            setVotes(articleById.article.votes)
            setLoading(false);
        })
    }, [article]);

    function revealComments() {
        setSeeComments(!seeComments);
    }
    
    let commentBox = <></>;
    let boxName = 'See Comments'

    if(seeComments){
        currentArticle.body=('')
        boxName = 'Hide Comments'
        commentBox = <Comments user={user}/>
    }

    if(loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <div className="currentArticle">
            <h3>{currentArticle.title}</h3>
                <div id="articleFeatures">
                    <h4>Author: {currentArticle.author}</h4>
                    <VoteButton votes={votes} article={article}/>
                </div>
            <p>{currentArticle.body}</p>
            <button onClick={revealComments}>{boxName}: {currentArticle.comment_count}</button>
            <div id='commentBox'>{commentBox}</div>
        </div> 

        )
    }


}

export default Article;

