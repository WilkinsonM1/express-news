const request = require('request')
// installed request module

//require promisify which is a core module
const {promisify} = require('util')


//storing promise of the request function in a variable
const promisifiedRequest = promisify(request)



// making an asynchronous function that will get the news from newsapi and return an array of objects which are the top-headlines news articles
//the getNews function will take two parameters which will come from user input

//we have taken out location as a parameter as we will use a different version of the api url that takes in a category as a parameter.
//the reason we did this was because we found that for some combinations of locations and categories there would be no results, no articles matching those criteria would be returned, which would be a poor user experience.
//hence we simplified out news function to just take one parameter, the category.
const getNews = async (category) => {
    try {
        const today = new Date()
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let data = await promisifiedRequest ({url: `https://newsapi.org/v2/everything?q=${category}&from=${date}&sortBy=publishedAt&apiKey=2e777933b6094d929701f767de03fde4`, json: true})
        let articlesArr = data.body.articles
        let articleSelection = articlesArr.slice(0,5)
        return(articleSelection)
        
    } catch (error) {
        console.log("oopsies there's been a problem")
    
    }

}
// getNews("brexit")

module.exports = {
    getNews
}