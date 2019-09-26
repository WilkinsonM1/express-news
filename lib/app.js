// pulls in info from getLocation and getNew and packages 
// returning an 'articles' object.
// this should contain the to news items

const {getNews} = require('./getNews')
const {getLocation} = require('./getLocation')


const main = async (theLocation, newsCategory) => {
        const theCountryCode = await getLocation(theLocation)
        await console.log(theCountryCode)
        // const news = await getNews(theCountryCode, newsCategory)
        const news = await getNews(theCountryCode.countryCode, newsCategory)
        await console.log(news)

        await console.log(news.articles)
    return news.articles

}


// main('Berlin','business')


modules.exports = {
    main
}
