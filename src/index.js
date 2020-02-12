const express = require('express')
const bodyparser = require('body-parser')
const usersRouter = require('./routes/users')

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/user', usersRouter)

module.exports = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
