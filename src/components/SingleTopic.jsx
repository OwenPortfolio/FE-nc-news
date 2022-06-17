import {getArticlesByTopic} from '../utils/api'
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import SortBox from '../components/SortBox';
import Pages from '../components/Pages';

const SingleTopic = () => {
    const {topic} = useParams();
    const [topicFilter, setTopicFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [error, setError] = useState();
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState();


    useEffect(() => {
        getArticlesByTopic(topic, sort, sortOrder).then((articlesByTopicFilter) => {
            setMaxPages(Math.floor(articlesByTopicFilter.articles.length / 10) + 1);
            if(articlesByTopicFilter.articles){
                if(page === 0){
                    setTopicFilter(articlesByTopicFilter.articles.slice(page, page + 10));
                } else {
                    setTopicFilter(articlesByTopicFilter.articles.slice(page * 10, (page*10) + 10));
                }
                setLoading(false);
                setError(false);
            } else {
                setError(articlesByTopicFilter.response.status)
                setLoading(false)
            }

        });
    }, [topic, sort, sortOrder, page]);



    if (loading){
        return (<h1>LOADING</h1>)
    } else if(error === 404){
        return <h2>404 Not Found</h2>
    } else {
        return (
        <>
        <h3 id='BodyHead'>Topic: {topic}</h3>
        <SortBox sort={sort} setSort={setSort} setSortOrder={setSortOrder}/>
        <Pages page={page} setPage={setPage} maxPage={maxPages}/>
        <ul id='ArticleList'>
            {topicFilter.map((article) => {
                let path = '/articles/' + article.article_id;
                    return <li className='listArticle' key={article.article_id}>
                        <Link to={path}><h3>{article.title}</h3></Link>
                        <p>{article.author}</p>
                        <p>{article.created_at}</p>
                        <p id='blurb'>{article.body}</p>
                    </li>
            })}
        </ul>
        </>
    )}
}
export default SingleTopic;