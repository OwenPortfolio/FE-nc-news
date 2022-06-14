import {useEffect, useState} from 'react';
import getArticles from '../utils/getArticles';

const Body = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <h2 id='BodyHead'>Articles</h2>
        <ul id='ArticleList'>
            {articles.map((article) => {
                    return <li key={article.index}>
                        <h2>{article.title}</h2>
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