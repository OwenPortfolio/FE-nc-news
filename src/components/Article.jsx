import {getArticleById} from '../utils/api'
import {useParams, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

const Article = () => {

    const {article} = useParams();
    const [currentArticle, setCurrentArticle] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticleById(article).then((articleById) => {
            setCurrentArticle(articleById.article);
            setLoading(false);
        })
    }, [article]);
    
    if(loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <div className="currentArticle">
            <h3>{currentArticle.title}</h3>
            <h4>{currentArticle.author}</h4>
            <p>{currentArticle.body}</p>
            <p>Comments: {currentArticle.comment_count}</p>
            <p>Upvotes: {currentArticle.votes}</p>
        </div> 

        )
    }


}

export default Article;

