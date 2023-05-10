const express = require('express')
const News = require('./news/news')

const app = express()


app.use(express.static('public'))

const news = new News();

const test = async () => {
    const data = await news.getByCategory('political');
    console.log(data)
}

test();






app.listen(5000, () => {
    console.log('Port is listening')
})