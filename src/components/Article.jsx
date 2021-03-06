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
    const [articleText, setArticleText] = useState('')
    const [error, setError] = useState();

    useEffect(() => {
        getArticleById(article).then((articleById) => {
            if(articleById.article){
                console.log(articleById.article)
                setCurrentArticle(articleById.article);
                setArticleText(articleById.article.body)
                setVotes(articleById.article.votes)
            } else {
                setError(articleById.response.status)
            }
            setLoading(false);
        })
    }, [article]);

    function revealComments() {
        setSeeComments(!seeComments);
    }
    
    let commentBox = <></>;
    let boxName = 'See Comments'
    let body = articleText;

    if(seeComments){
        body =''
        boxName = 'Hide Comments'
        commentBox = <Comments user={user}/>
    }

    if(loading){
        return (<h1>LOADING</h1>)
    } else if(error){
        return <h2>{error}: No Such Article</h2>
    } else {
        return (
        <div className="currentArticle">
            <h3>{currentArticle.title}</h3>
                <div id="articleFeatures">
                    <h3>Author: {currentArticle.author} <VoteButton votes={votes} article={article}/></h3>
                </div>
            <p id='ArticleText'>{body}</p>
            <button onClick={revealComments}>{boxName}: {currentArticle.comment_count}</button>
            <div id='commentBox'>{commentBox}</div>
        </div> 

        )
    }


}

export default Article;

