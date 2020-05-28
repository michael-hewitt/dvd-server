const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    database: 'dvdrental',
})

const getCustomers = (request, response) => {
    pool.query('SELECT * FROM customer;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCategories = (request, response) => {
    pool.query('SELECT * FROM category;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getCustomers,
    getCategories,
}
