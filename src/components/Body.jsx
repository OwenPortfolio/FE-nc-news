import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getArticles} from '../utils/api';
import SortBox from '../components/SortBox';

const Body = () => {

    const [sort, setSort] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc'); 
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticles(sort, sortOrder).then((articlesFromApi) => {
            setArticles(articlesFromApi.articles);
            setLoading(false);
        });
    }, [sort, sortOrder]);
    
    if (loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h3 id='BodyHead'>Stories</h3>
        <SortBox sort={sort} setSort={setSort} setSortOrder={setSortOrder}/>
        <ul id='ArticleList'>
            {articles.map((article) => {
                return <li className="listArticle" key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
                        <p>Author: {article.author} Date: {article.created_at.substring(0,10)}</p>
                        <p id='blurb'>{article.body}</p>
                    </li>
            })}
        </ul>
        </>
    )}

    }



export default Body;