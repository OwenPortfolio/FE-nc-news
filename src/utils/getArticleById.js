const axios = require('axios')

let url = 'https://owen-news.herokuapp.com/api/articles/'

const getArticleById = () => {
    return axios.get(url)
    .then(function (response) {
        return response.data;
    })
}

module.exports = getArticleById;