console.log('up and running...')

// Setup DOM methods to HTML
// const getlocation = document.getElementById('location')
const getcategory = document.getElementById('category')
const getNews = document.getElementById('getNews')
const loading = document.getElementById('loading')

const displayNewsCategorys = document.getElementById('displayNewsCategorys')

const newsWrapper = document.getElementById('newsWrapper')



// when the 'request for news' button being clicked
// send a get request to the endpoint on localhost:3000/news
// 
//      Hence for a location of 'Chester' and category 'business'
//
//      http:/localhost:3000/news?category=business
//
//      



/****** DEMO */


let testData = [
        {
        "source": {
        "id": null,
        "name": "Cointelegraph.com"
        },
        "author": "Cointelegraph By Jack Martin",
        "title": "Fundstrat's Tom Lee Reminds Us of Bitcoin’s 'Ten Best Days' Rule",
        "description": "Majority of Bitcoin gains come in the “ten best days” each year, says Fundstrat Global Advisors co-founder Tom Lee",
        "url": "https://cointelegraph.com/news/fundstrats-tom-lee-reminds-us-of-bitcoins-ten-best-days-rule",
        "urlToImage": "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80ZDg1ODQ1NjMyZTQ3N2UxYjUwZjI2OWZlMzYxZmNlMi5wbmc=.png",
        "publishedAt": "2019-09-30T09:32:00Z",
        "content": "Fundstrat co-founder Thomas Lee tweeted a timely reminder against panic-selling on Sept. 28, reminding that the majority of Bitcoin (BTC) gains come in the ten best trading days of the year. In fact, excluding these ten best days, BTC is down 25% per year.\r\nF… [+1372 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes.com"
        },
        "author": "Forbes Digital Assets, Contributor, Forbes Digital Assets, Contributor https://www.forbes.com/sites/forbesdigitalassets/",
        "title": "Crypto Daily Market Commentary - 30.09.2019",
        "description": "We were surprised to find that bitcoin was able to defend the $8,000 level until this morning (UTC +8h, Asian time).",
        "url": "https://www.forbes.com/sites/forbesdigitalassets/2019/09/30/crypto-daily-market-commentary30092019/",
        "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d91bd486de3150009a58712%2F960x0.jpg",
        "publishedAt": "2019-09-30T09:20:14Z",
        "content": "Crypto Market OverviewTop 10 Coins and Tokens. Source: Coin360\r\nhttps://coin360.com/\r\nBefore the weekend, when bitcoin was hovering around $8,000, we concluded that it could test the range between $7,500 and $7,600, and if it finds strong support, that we mig… [+12768 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Seekingalpha.com"
        },
        "author": "Doug Noland",
        "title": "Weekly Commentary: Q2 2019 Z.1 And Repos",
        "description": "This week saw repo market instability bumped from the headlines by instability at the White House. The S&P 500 declined 1.0% (up 18.1% y-t-d), and the Dow slipp",
        "url": "https://seekingalpha.com/article/4294085-weekly-commentary-q2-2019-z-1-repos",
        "urlToImage": "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
        "publishedAt": "2019-09-30T08:42:41Z",
        "content": "Non-Financial Debt (NFD) expanded $408 billion during Q1 to a record $53.015 trillion. This was down from Q1's $765 billion expansion. On a seasonally-adjusted and annualized (SAAR) basis, Q2 NFD growth slowed to $1.652 trillion from Q1's booming $3.061 trill… [+59486 chars]"
        },
        {
        "source": {
        "id": "the-next-web",
        "name": "The Next Web"
        },
        "author": "Satoshi Nakaboto",
        "title": "Satoshi Nakaboto: ‘Bakkt processes $5M worth of Bitcoin futures in first week’",
        "description": "Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Pasteur used to say: Talk to a stranger on…",
        "url": "https://thenextweb.com/hardfork/2019/09/30/satoshi-nakaboto-bakkt-processes-5m-worth-of-bitcoin-futures-in-first-week/",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864",
        "publishedAt": "2019-09-30T08:41:59Z",
        "content": "Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Pasteur used to say: Talk to a strange… [+2953 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Bitcoinist.com"
        },
        "author": "Osato Avan-Nomayo",
        "title": "$350 Million Bithumb Acquisition Deal Not Happening",
        "description": "The acquisition of South Korean bitcoin exchange Bithumb by BK Consortium has been scrapped. Bithumb Sale Hits Rocks Over Missed Payment Deadlines South Korean media outlet Hanguk Kyungjae says the proposed acquisition of Bithumb by BK Consortium may no longe…",
        "url": "https://bitcoinist.com/bithumb-acquisition-deal-in-danger-of-falling-apart/",
        "urlToImage": "https://bitcoinist.com/wp-content/uploads/2018/10/shutterstock_1196508784.jpg",
        "publishedAt": "2019-09-30T08:17:06Z",
        "content": "The acquisition of South Korean bitcoin exchange Bithumb by BK Consortium has been scrapped.\r\nBithumb Sale Hits Rocks Over Missed Payment Deadlines\r\nSouth Korean media outlet Hanguk Kyungjae says the proposed acquisition of Bithumb by BK Consortium may no lon… [+2217 chars]"
        }
]











// needs async/await
getNews.addEventListener('click', () => {

    
    loading.textContent = "getting the news..."
    
    // let responce = await fetch(`http://localhost:3000/news?category=${getcategory}`)
    // let data = await responce.json()

    let data = testData  // TEMP!!!
    console.log(' we should have returned data as an array containing 5 objects')
    console.table(data)

    console.log(`data[0].title ${data[0].title}`)
    console.log(`data[0].descr  ${data[0].description}`)
    console.log(`data[0].urltoimg  ${data[0].urlToImage}`)
    console.log(`data[0].url  ${data[0].url}`)

    //create Elements
    for(article=0; article<data.length; article++){
        console.log(`article number  ${article}`)
        let newsCard = document.createElement('div')
        newsCard.innerHTML = ""
        newsWrapper.appendChild(newsCard)
        let textwrapper = document.createElement('div')
        textwrapper.innerHTML = ""
        newsCard.appendChild(textwrapper)
        textwrapper.setAttribute("class", "textwrapper")
        let titleNews = document.createElement('h2')
        titleNews.textContent = data[article].title
        textwrapper.appendChild(titleNews)
        let descriptionNews = document.createElement('p')
        descriptionNews.textContent = data[article].description
        textwrapper.appendChild(descriptionNews)
        let linkNews = document.createElement('a')
        linkNews.textContent = 'LINK'
        linkNews.setAttribute("href", data[article].url)
        textwrapper.appendChild(linkNews)
        let imgNews = document.createElement('div')
        newsCard.appendChild(imgNews)
        imgNews.setAttribute("class", "imgNews")
        let img = document.createElement('img')
        img.innerHTML = ''
        newsCard.appendChild(img)
        img.setAttribute("src", data[article].urlToImage)
    }


    
    //needs a catch in case our server is down
})


