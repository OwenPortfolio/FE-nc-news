import {useEffect, useState} from 'react';

const Body = () => {

    const [filter, setFilter] = useState('none');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    function getArticles(){
        return fetch('https://owen-news.herokuapp.com/api/articles')
        .then((response) => response.json())
    }

    useEffect(() => {
        getArticles(articles).then((articlesFromApi) => {
            console.log(articlesFromApi)
            setArticles(articlesFromApi.articles);
        });
    }, []);
        return (
            <>
            <h1 id='BodyHead'>Articles</h1>
            <ul>
                {articles.map((article) => {
                    if(filter === 'none'){
                        return <li key={article.index}>
                            <h3>{article.title}</h3>
                            <p>{article.author}</p>
                            <p>{article.body}</p>
                            <p>{article.created_at}</p>
                        </li>
                    }
                })}
            </ul>
            </>
        )
    }



export default Body;