const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})