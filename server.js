// server.js
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello world from a  Node.js app!s is Updated. This is fifth  update')
})
var PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is up on ' + PORT)
})
