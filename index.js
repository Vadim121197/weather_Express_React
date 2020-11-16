const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/api', require('./routes/weather.routes.js'))

app.use('*', (req, res) => res.send('Page Not Found'))

app.use('*', (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const PORT = config.get('port') || 5000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
