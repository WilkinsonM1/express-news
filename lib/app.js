// pulls in info from getLocation and getNew and packages 
// returning an 'articles' object.
// this should contain the to news items

const {getNews} = require('./getNews')
// const {getLocation} = require('./getLocation')

//we've taken out getLocation since we won't be taking in location as a parameter as this narrowed the returned results to zero 
//and therefore would result in a poor user experience.

const main = async (newsCategory) => {
        // const theCountryCode = await getLocation(theLocation)
        // await console.log(theCountryCode)
        // const news = await getNews(theCountryCode, newsCategory)
        
        const news = await getNews(newsCategory)
        // console.log(news)

    return news
    // console.log('hello')

}


// main('brexit')


module.exports = {
    main
}
