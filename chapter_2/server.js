const express = require('express')
const app = express()
const PORT = 3000

const data = {
    name: 'James',
    age: 24
}

app.use(express.json())

app.get('/', (req, res) => {
    console.log('yey hehe', req.method)
    res.send(`<body style="background: lightblue; color: black"> 
        <h1>DATA:</h1>
        <p>${JSON.stringify(data)}</p>
        </body>`)
})

app.get('/dashboard', (req, res) => {
    console.log('You are in the dashboard')
    res.send('<h1>dashboard</h1>')
})

app.get('/api/data', (req, res) => {
    console.log('this are all the data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
     const newEntry = req.body
     console.log(newEntry)
     res.sendStatus(201)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))