// pulls in info from getLocation and getNew and packages 
// returning an 'articles' object.
// this should contain the to news items

const {getNews} = require('./getNews')
const {getLocation} = require('./getLocation')


const main = async (theLocation, newsCategory) => {
        const country = await getLocation(theLocation)
        const news = await getNews(country, newsCategory)

    return news.articles

}


modules.exports = {
    main
}
