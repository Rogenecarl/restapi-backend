const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log('yey hehe', req.method)
    res.send('<h1>Homepage</h1>')
})

app.get('/dashboard' , (req, res) => {
    console.log('You are in the dashboard')
    res.send('<h1>dashboard</h1>')
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))