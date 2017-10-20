const express = require('express')
const body_parser = require('body-parser')
const path = require('path')
const session = require('express-session')
const app = express()
app.use(session({secret: 'God is the only key', resave: true, saveUninitialized: true}))
app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())

app.use(express.static(path.join(__dirname, "./client/views/static")));
app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

// require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000)
