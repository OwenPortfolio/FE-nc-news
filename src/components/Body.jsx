import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
                return <li className="listArticle" key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
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