const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523',id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3},
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    
]

const generateId = () => {
    const Id = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
    return Number(Id)
}

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/info', (req,res) => {
    res.send(`<h1>Phonebook has info for ${generateId()} people <h1>`)
   
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})