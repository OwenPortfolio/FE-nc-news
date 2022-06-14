import {getArticlesByTopic} from '../utils/api'
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

const SingleTopic = () => {
    const {topic} = useParams();
    const [topicFilter, setTopicFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticlesByTopic(topic).then((articlesByTopicFilter) => {
            setTopicFilter(articlesByTopicFilter.articles);
            setLoading(false);
        });
    }, [topic]);

    if (loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h2 id='BodyHead'>Topic: {topic}</h2>
        <ul id='ArticleList'>
            {topicFilter.map((article) => {
                let path = '/articles/' + article.article_id;
                    return <li key={article.article_id}>
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