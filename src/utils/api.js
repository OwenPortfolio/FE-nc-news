import axios from 'axios';

const myApi = axios.create({
    baseURL: 'https://owen-news.herokuapp.com/api'
})

export const getArticles = (sort, sortOrder) => {

    if(sort === 'comments'){
        sort = 'comment_count';
    }
    
    if(sort === 'date'){
        let url = `/articles?order=${sortOrder}`
        return myApi.get(url)
        .then(function (response) {
            return response.data;
        })
    } else {
        let url = `/articles?sort_by=${sort}&order=${sortOrder}`
        return myApi.get(url)
        .then(function (response) {
            return response.data;
        })
    }
}

export const getArticlesByTopic = (topic, sort, sortOrder) => {
    /*currently body/getArticles and singleTopic/getArticlesByTopic are sharing
    and can probably be combined*/
    if(sort === 'comments'){
        sort = 'comment_count';
    }
    
    if(sort === 'date'){
        let url = `/articles?topic=${topic}&order=${sortOrder}`
        return myApi.get(url)
        .then(function (response) {
            return response.data;
        })
    } else {
        let url = `/articles?topic=${topic}&sort_by=${sort}&order=${sortOrder}`
        return myApi.get(url)
        .then(function (response) {
            return response.data;
        })
    }
}

export const getArticleById = (article) => {
    return myApi.get(`/articles/${article}`)
    .then((res) => {
        return res.data;
    })
    .catch(error => {
        return error;
    })
}

export const sendVote = (article) => {
    return myApi.patch(`/articles/${article}`, {inc_votes:1})
    .then((res) => {
        return res;
    })
    .catch(error => {
        return error;
    })
}

export const getComments = (article) => {
    return myApi.get(`/articles/${article}/comments`)
    .then((res) => {
        return res.data;
    })
}

export const postComment = (article, comment, user) => {
    return myApi.post(`/articles/${article}/comments`, {username: user, body: comment})
    .then((res) => {
        return res;
    })
    .catch(error => {
        return error;
    })
}

export const deleteComment = (commentId) => {
    return myApi.delete(`/comments/${commentId}`)
    .then((res) => {
        return res;
    })
    .catch(error => {
        return error;
    })
}