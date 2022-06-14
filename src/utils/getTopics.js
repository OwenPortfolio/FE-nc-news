const axios = require('axios')

const getTopics = () => {
    return axios.get('https://owen-news.herokuapp.com/api/topics')
    .then(function (response){
        return response.data;
    })
}

module.exports = getTopics;