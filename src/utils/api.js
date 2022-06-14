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

export const getArticleById = (article) => {
    return myApi.get(`/articles/${article}`)
    .then((res) => {
        return res.data;
    })
}

export const sendVote = (article) => {
    return myApi.patch(`/articles/${article}`, {inc_votes:1})
    .then((res) => {
    })
}