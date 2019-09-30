const express = require('express')
const path = require('path')
const {main} = require('./lib/app')

const app = express()
//this serves our static library up on our front end and provides the absolute path to do so
app.use(express.static(path.join(__dirname, "public")))

//our main function will take two parameters location and category from input forms on client side.
app.get('/news', async(req, res)=>{
    let data = await main(req.query.category)
    res.send(data)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})