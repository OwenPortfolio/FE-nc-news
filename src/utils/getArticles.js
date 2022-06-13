const getArticles = () => {
    return fetch('https://owen-news.herokuapp.com/api/articles')
    .then((response) => response.json())
}

module.exports = getArticles;