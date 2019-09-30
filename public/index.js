console.log('up and running...')

// Setup DOM methods to HTML
const inputNews = document.getElementById('inputNews')
const getNews = document.getElementById('getNews')
const loading = document.getElementById('loading')
const newsWrapper = document.getElementById('newsWrapper')



// when the 'request for news' button being clicked
// send a get request to the endpoint on localhost:3000/news
// 
//      Hence for a location of 'Chester' and category 'business'
//
//      http:/localhost:3000/news?category=business
//
//      



getNews.addEventListener('click', async () => {

    
    loading.textContent = "getting the news..."
    
    let response = await fetch(`http://localhost:3000/news?category=${inputNews.value}`)
    let data = await response.json()

    // let data = testData  // TEMP!!!
    console.log(' we should have returned data as an array containing 5 objects')
    console.table(data)


    // create elements inside the DOM newsWrapper
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


