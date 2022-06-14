import {useEffect, useState} from 'react';
import getArticles from '../utils/getArticles';

const Body = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [articleId, setArticleId] = useState();

    useEffect(() => {
        getArticles(articles).then((articlesFromApi) => {
            setArticles(articlesFromApi.articles);
            setLoading(false);
        });
    }, []);
    
    if (loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h1 id='BodyHead'>Articles</h1>
        <ul>
            {articles.map((article) => {
                    return <li key={article.index}>
                        <h1>{article.title}</h1>
                        <p>{article.author}</p>
                        <p>{article.created_at}</p>
                        <p id='blurb'>{article.body}</p>
                    </li>
            })}
        </ul>
        </>
    )}

    }



export default Body;