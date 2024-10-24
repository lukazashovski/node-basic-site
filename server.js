const express = require('express')
const app = express()
const port = 8080
const path = require('path');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use(express.static('static'));

app.use( (req, res) => {
	res.status(404).sendFile(path.join(__dirname + '/static/404.html'))
});


