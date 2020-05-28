const express = require('express')
const bodyParser = require('body-parser')
const queries = require('./queries')
const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/api', (request, response) => {
    response.json({ info: 'DVD Rental API' })
})
app.get('/api/customers', queries.getCustomers)
app.get('/api/categories', queries.getCategories)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})