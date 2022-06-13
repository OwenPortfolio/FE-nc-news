import {useEffect, useState} from 'react';
import getArticles from '../utils/getArticles';

const Body = () => {

    const [filter, setFilter] = useState('none');
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
        <h1 id='BodyHead'>Articles</h1>
        <ul>
            {articles.map((article) => {
                if(filter === 'none'){
                    return <li key={article.index}>
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>
                        <p>{article.created_at}</p>
                        <p>{article.body}</p>
                    </li>
                }
            })}
        </ul>
        </>
    )}

    }



export default Body;