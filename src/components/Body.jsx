import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getArticles} from '../utils/api';
import SortBox from '../components/SortBox';
import Pages from '../components/Pages';

const Body = () => {

    const [sort, setSort] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc'); 
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [maxPages, setMaxPages] = useState();

    useEffect(() => {
        getArticles(sort, sortOrder).then((articlesFromApi) => {
            setMaxPages(Math.floor(articlesFromApi.articles.length / 10) + 1);
            if(page === 0){
                setArticles(articlesFromApi.articles.slice(page, page + 10));
            } else {
                setArticles(articlesFromApi.articles.slice(page * 10, (page*10) + 10));
            }
            setLoading(false);
        });
    }, [sort, sortOrder, page]);
    


    if (loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h3 id='BodyHead'>Stories</h3>
        <SortBox setPage={setPage} sort={sort} setSort={setSort} setSortOrder={setSortOrder}/>
        <Pages page={page} setPage={setPage} maxPage={maxPages}/>
        <ul id='ArticleList'>
            {articles.map((article) => {
                return <li className="articleCard" key={article.article_id}>
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