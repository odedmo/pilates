const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const clientPath = '/../client/';

app.use(express.static(path.join(__dirname, clientPath)));
app.use('/scripts', express.static(path.join(__dirname, clientPath + 'node_modules')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, clientPath + 'index.html'));
});

app.listen(3000, function () {
  console.log('listening on port ' + port); 
});