const express = require('express')
const app = express()
const port = 3000

// main page
app.get('/', (req, res) => res.send('Hello World! - from the main page'))
app.get('/:category', (req, res) => (
  console.log(req),
  res.send("welcome to the " + req.params.category + " page!"))
)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))