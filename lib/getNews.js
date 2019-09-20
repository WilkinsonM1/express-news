const request = require('request')
// installed request module

//require promisify which is a core module
const {promisify} = require('util')


//storing promise of the request function in a variable
const promisifiedRequest = promisify(request)

// making an asynchronous function that will get the news from newsapi and return an array of objects which are the top-headlines news articles
const getNews = async (locationData) => {
    try {
        let data = await promisifiedRequest ({url: `http://newsapi.org/v2/top-headlines?country=gb&from=2019-08-20&sortBy=publishedAt&apiKey=2e777933b6094d929701f767de03fde4`, json: true})
        let articlesArr = data.body.articles
        let articleSelection = articlesArr.slice(0,5)
        return articleSelection
        
    } catch (error) {
        console.log("oops there's been a problem")
    }

}


module.exports = {
    getNews
}