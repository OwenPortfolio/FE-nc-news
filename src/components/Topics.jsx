import getTopics from '../utils/getTopics';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Topics = () => {

    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopics(topics).then((topicsFromApi) => {
            setTopics(topicsFromApi.topics);
            setLoading(false);
        });
    }, [topics]);

    if(loading){
        return (<h1>LOADING</h1>)
    } else {
        return (
        <>
        <h2>Topics:</h2>
        <ul id='TopicList'>
            {topics.map((topic) => {
                let path = '/articles/topics/' + topic.slug;  
                return <li className="NavTopics" key={topic.slug}>
                    <Link to={path}><h3>{topic.slug}</h3></Link>
                </li>
                })}
        </ul>
        </>
        )
    }
}

export default Topics