
// Node Server

const express = require('express')
const app = express()
const port = 3001
// Parses incoming JSON requests and puts the parsed data in req
app.use(express.json());
// Allows for Cross Origin Resource Sharing
const cors = require('cors');
// Allows requests from all origins (Which is why the  bracket for cors() is empty)
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
    res.send('Here is some API information!')
})

app.post('/api', (req, res) => {
    // Data is going to come from request body
    const data = req.body
    console.log(data)
    // Display this to the user
    res.send('Blog successfully saved!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}...`)
})
