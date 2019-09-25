// pulls in info from getLocation and getNew and packages 
// returning an 'articles' object.
// this should contain the to news items


// TEMP ***
// const {getNews} = require('./getNews')
// const {getLocation} = require('./getLocation')









// TEMP
const getLocation = (location)=>{
    console.log(`location --> ${location}`)
    // return {country: 'Germany'}
    return 'Germany'
}

// TEMP
const getNews = (country, newsCategory) => {
    console.log(`country -> ${country}    news ->  ${newsCategory}`)

    return  {
    status: "ok",
    totalResults: 70,
    articles: [
    {
    source: {
    id: null,
    name: "Www.fr.de"
    },
    author: null,
    title: "Frankfurt: VW muss nach Urteil von OLG Kunden den Kaufpreis erstatten | Wirtschaft - fr.de",
    description: "Im Dieselskandal hat das OLG Frankfurt ein Grundsatzurteil gesprochen. Das Urteil könnte ernste Konsequenzen für VW haben.",
    url: "https://www.fr.de/wirtschaft/dieselskandal-muss-nach-urteil-frankfurt-kaufpreis-erstatten-zr-13038436.html",
    urlToImage: "https://www.fr.de/bilder/2019/09/25/13038436/99236319-dieselskandal-muss-nach-urteil-frankfurt-kaufpreis-erstatten-MauJG7Aef.jpg",
    publishedAt: "2019-09-25T13:39:00Z",
    content: "Im Dieselskandal hat das OLG Frankfurt ein Grundsatzurteil gesprochen. Das Urteil könnte ernste Konsequenzen für VW haben.  Frankfurt - VW muss nach einem Gerichtsurteil im Dieselskandal für Autos mit dem Motor EA 189 haften. Ein Anspruch auf Rückgabe des Fa… [+1548 chars]"
    },
    {
    source: {
    id: null,
    name: "Golem.de"
    },
    author: "Friedhelm Greis",
    title: "Keine Lizenzgebühren: Google zeigt nur noch Überschriften von Medien an - Golem.de - Golem.de",
    description: "Der Suchmaschinenkonzern Google ändert die Standardanzeige von Suchergebnissen europäischer Medien in Frankreich. Um mehr als die Überschrift anzeigen zu lassen,",
    url: "https://www.golem.de/news/keine-lizenzgebuehren-google-zeigt-nur-noch-ueberschriften-von-medien-an-1909-144084.html",
    urlToImage: "https://www.golem.de/1909/144084-209830-209828_rc.jpg",
    publishedAt: "2019-09-25T13:21:02Z",
    content: "Der Suchmaschinenkonzern Google passt die Darstellung von Suchergebnissen dem neuen europäischen Leistungsschutzrecht an. Da die entsprechende nationale Regelung in Frankreich Ende Oktober 2019 in Kraft trete, würden dort standardmäßig bei allen als Pressepub… [+2583 chars]"
    },
    {
    source: {
    id: null,
    name: "Www.haz.de"
    },
    author: "HAZ",
    title: "Continental: Sechs Standorte und rund 3000 Jobs fallen weg - Hannoversche Allgemeine",
    description: "Der hannoversche Autozulieferer Continental verkündet eine neue Strategie. Das Unternehmen baut seine Werke um und will ab 2023 die Kosten jährlich um 500 Millionen Euro senken. Dabei sollen 3000 Jobs wegfallen.",
    url: "https://www.haz.de/Nachrichten/Wirtschaft/Niedersachsen/Continental-Sechs-Standorte-und-rund-3000-Jobs-fallen-weg",
    urlToImage: "https://www.haz.de/var/storage/images/haz/nachrichten/wirtschaft/niedersachsen/continental-sechs-standorte-und-rund-3000-jobs-fallen-weg/729627598-3-ger-DE/Continental-schliesst-sechs-Standorte-3000-Jobs-weg_reference_2_1.jpg",
    publishedAt: "2019-09-25T12:05:00Z",
    content: "Der Autozulieferer Continental macht mit seinem Sparprogramm ernst: Der Konzern will sechs Standorte schließen und mehr als 3000 Stellen streichen. Das ist Teil des Strukturprogramms „Strategie 2030“, das Vorstand und Aufsichtsrat am Mittwoch beschlossen … [+59 chars]"
    },
    {
    source: {
    id: null,
    name: "Welt.de"
    },
    author: "Olaf Gersemann",
    title: "Condor: Ökonomen kritisieren staatlichen Überbrückungskredit - WELT",
    description: "380 Millionen Euro bekommt der Ferienflieger Condor vom Staat, haften muss zur Not der Steuerzahler. Pro Arbeitsplatz macht das fast 77.000 Euro. Führende Ökonomen sind entsetzt: „Meist verlängert man so nur die Leidenszeit.“",
    url: "https://www.welt.de/wirtschaft/article200904864/Condor-Oekonomen-kritisieren-staatlichen-Ueberbrueckungskredit.html",
    urlToImage: "https://www.welt.de/img/wirtschaft/mobile200926246/6131350367-ci16x9-w1200/Insolvenz-Thomas-Cook-Tochter-Condor-am-Flughafen-Frankfurt.jpg",
    publishedAt: "2019-09-25T11:47:00Z",
    content: "Keine 48 Stunden hat es gedauert nach der Konkursmeldung des britischen Reiseveranstalters Thomas Cook, bis der deutsche Steuerzahler angezapft wurde: Die Bundesregierung habe entschieden, der deutschen Cook-Tochter Condor ein vom Bund garantiertes Darlehen d… [+4717 chars]"
    },
    {
    source: {
    id: null,
    name: "Faz.net"
    },
    author: "Reuters",
    title: "Ex-Chef von Danske Bank in Estland tot aufgefunden - FAZ - Frankfurter Allgemeine Zeitung",
    description: "Aivar Rehe leitete die Filiale der Danske Bank in Estland von 2007 bis 2015. Im Geldwäscheskandal, der die Bank erschütterte, trat er als Zeuge auf.",
    url: "https://www.faz.net/aktuell/wirtschaft/unternehmen/ex-chef-von-danske-bank-in-estland-tot-aufgefunden-16402434.html",
    urlToImage: "https://media0.faz.net/ppmedia/aktuell/517368789/1.6402442/facebook_teaser/das-logo-der-danske-bank.jpg",
    publishedAt: "2019-09-25T11:19:00Z",
    content: "Der frühere Chef der von einem Geldwäscheskandal erschütterten Danske Bank in Estland, Aivar Rehe, ist tot. Ein Sprecher der estnischen Polizei sagte am Mittwoch zu Reuters, der Leichnam des Mannes sei gefunden worden. Die Polizei hatte Rehe seit Montag gesuc… [+399 chars]"
    },
    {
    source: {
    id: null,
    name: "Watson.de"
    },
    author: "watson.de",
    title: "Aldi oder Lidl: ZDF-Doku verrät, welcher Discounter wirklich günstiger ist - watson",
    description: "watson - das newsportal",
    url: "https://www.watson.de/!458098348",
    urlToImage: "https://www.watson.de/imgdb/e89b/Qx,A,0,234,4495,2531,1869,1254,747,516/7816943824600703",
    publishedAt: "2019-09-25T11:01:00Z",
    content: "Bild: Getty Images/watson-montage Aldi oder Lidl: ZDF-Doku enthüllt, welcher Discounter wirklich günstiger ist Es ist der Kampf der Giganten um den kleinsten Preis: Immer wieder behaupten die Discounter Aldi und Lidl, die jeweils günstigsten Produkte anzubi… [+3869 chars]"
    },
    {
    source: {
    id: null,
    name: "Merkur.de"
    },
    author: null,
    title: "Paar geht mit 31 Jahren als Millionäre in Rente - doch dann packt beide die Angst | Geld - hna.de",
    description: "Ein junges Paar kündigte mit gerade mal 31 Jahren seine Jobs und ging als Millionäre in den Ruhestand. Doch dann bekamen sie es mit der Angst zu tun - warum, das erfahren Sie hier.",
    url: "https://www.merkur.de/leben/geld/paar-geht-millionaere-rente-doch-dann-packt-angst-zr-13034354.html",
    urlToImage: "https://www.hna.de/bilder/2019/09/24/13034354/846234378-paar-geht-rente-1lcbEDF0fsef.jpg",
    publishedAt: "2019-09-25T10:52:30Z",
    content: "Ein junges Paar kündigte mit gerade mal 31 Jahren seine Jobs und ging als Millionäre in den Ruhestand. Doch dann bekamen sie es mit der Angst zu tun - warum, das erfahren Sie hier.Kristy Shen und Bryce Leung haben geschafft, wovon viele träumen: Sie kündigten… [+5425 chars]"
    },
    {
    source: {
    id: null,
    name: "Ecomento.de"
    },
    author: "http://www.facebook.com/ecomento.de",
    title: "Volvo gibt Ausblick auf erstes Elektroauto, Vorstellung am 16. Oktober - ecomento.de",
    description: "Volvo gibt einen Ausblick auf sein erstes Elektroauto. Es basiert auf dem als Verbrenner konzipierten Kompakt-SUV Volvo XC40 und wird im Oktober enthüllt.",
    url: "https://ecomento.de/2019/09/25/volvo-xc40-elektroauto-ausblick-vorstellung-16-oktober-2019/",
    urlToImage: "https://ecomento.de/wp-content/uploads/2019/09/Volvo-XC40-Elektroauto.jpg",
    publishedAt: "2019-09-25T09:16:43Z",
    content: "Nach der Performance-Tochter Volvo Polestar will auch Volvo ein erstes Elektroauto anbieten, die Schweden geben nun einen Ausblick auf das Modell. Der neue Voll-Stromer basiert auf dem als Verbrenner konzipierten Kompakt-SUV Volvo XC40. Der rein elektrische A… [+2033 chars]"
    }
]}
}


// use a promise to get country and news data
// const main = async (theLocation, newsCategory) => {
//     const country = await getLocation(theLocation)
//     const news = await getNews(country, newsCategory)

const main = (theLocation, newsCategory) => {
        const country = getLocation(theLocation)
        const news = getNews(country, newsCategory)

    console.log(news.articles)
    // return news.article

}


main('Berlin', 'business')