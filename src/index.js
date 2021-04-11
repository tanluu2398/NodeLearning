const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const port = 8000
const app = express()
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', hbs({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))

route(app)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))