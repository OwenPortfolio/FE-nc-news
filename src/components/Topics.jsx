import getTopics from '../utils/getTopics';
import {useEffect, useState} from 'react';

const Topics = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopics(topics).then((topicsFromApi) => {
            setTopics(topicsFromApi.topics);
            setLoading(false);
        });
    }, []);
    return <h1>Topics</h1>
}

export default Topics