const express = require('express') 
const app = express() 
const port = process.env.PORT || 3000

const fs = require('fs')
const home = fs.readFileSync('index.html') 

app.post('', (req, res) => {
  res.end(home)
})
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) }) 
