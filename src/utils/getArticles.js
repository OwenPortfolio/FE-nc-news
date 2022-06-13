const axios = require('axios')

const getArticles = () => {
    return axios.get('https://owen-news.herokuapp.com/api/articles')
    .then(function (response) {
        return response.data;
    })
}

module.exports = getArticles;