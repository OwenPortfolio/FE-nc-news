import {getArticleById, sendVote} from '../utils/api'
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import VoteButton from '../components/VoteButton'
const Article = () => {

    const {article} = useParams();
    const [currentArticle, setCurrentArticle] = useState();
    const [loading, setLoading] = useState(true);
    const [votes, setVotes] = useState(0);

    useEffect(() => {
        getArticleById(article).then((articleById) => {
            setCurrentArticle(articleById.article);
            setVotes(articleById.article.votes)
            setLoading(false);
        })
    }, [article]);

    if(loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <div className="currentArticle">
            <h3>{currentArticle.title}</h3>
                <div id="articleFeatures">
                    <h4>Author: {currentArticle.author}</h4>
                    <button>Comment: {currentArticle.comment_count}</button>
                    <VoteButton votes={votes} article={article}/>
                </div>
            <p>{currentArticle.body}</p>
        </div> 

        )
    }


}

export default Article;

