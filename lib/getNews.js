const request = require('request')
// installed request module

//require promisify which is a core module
const {promisify} = require('util')


//storing promise of the request function in a variable
const promisifiedRequest = promisify(request)



// making an asynchronous function that will get the news from newsapi and return an array of objects which are the top-headlines news articles
//the getNews function will take two parameters which will come from user input
const getNews = async (locationData, category) => {
    try {
//         const today = new Date()
// const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let data = await promisifiedRequest ({url: `https://newsapi.org/v2/top-headlines?country=${locationData}&category=${category}&apiKey=2e777933b6094d929701f767de03fde4`, json: true})
        let articlesArr = data.body.articles
        let articleSelection = articlesArr.slice(0,5)
        return articleSelection
        
    } catch (error) {
        console.log("oops there's been a problem")
    }

}
// getNews("de", "business")

module.exports = {
    getNews
}