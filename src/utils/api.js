import axios from 'axios';

const myApi = axios.create({
    baseURL: 'https://owen-news.herokuapp.com/api'
})

export const getArticlesByTopic = (topic) => {
    return myApi.get(`/articles?topic=${topic}`)
    .then((res) => {
        return res.data;
    })
}