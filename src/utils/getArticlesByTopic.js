
const axios = require('axios')

const getArticlesByTopic = () => {

    return axios.get('https://owen-news.herokuapp.com/api/articles')
    .then(function (response) {
        return response.data;
    })
}

export default getArticlesByTopic