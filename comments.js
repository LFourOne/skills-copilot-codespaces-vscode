// Create web server

// Import modules
const express = require('express')
const bodyParser = require('body-parser')

// Create web server
const app = express()

// Set view engine
app.set('view engine', 'ejs')

// Set static folder
app.use(express.static('public'))

// Body parser
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/comments', (req, res) => {
  res.render('comments')
})

app.post('/comments', (req, res) => {
  const { name, email, comment } = req.body
  const data = { name, email, comment }
  res.render('comments', { data })
})

// Start web server
app.listen(3000, () => {
  console.log('Web server running at http://localhost:3000')
})