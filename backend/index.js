const express = require('express')
const News = require('./news/news')

const app = express()


app.use(express.static('public'))

new News('test.txt')

app.listen(5000, () => {
    console.log('Port is listening')
})