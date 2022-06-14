import {getArticlesByTopic} from '../utils/api'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

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
        <h1 id='BodyHead'>Topic: {topic}</h1>
        <ul id='ArticleList'>
            {topicFilter.map((article) => {
                    return <li key={article.article_id}>
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
export default SingleTopic;