const express = require('express')

const app = express()


app.get('/', (req,res) => {
    res.send('<h2>hello from server !!</h2>')
})

app.listen(5000, () => {
    console.log('Port is listening')
})