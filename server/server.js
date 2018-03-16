const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const apiRoutes = express.Router();
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');
const mongoose = require('mongoose');

// mongoose.Promise = Promise;

// const clientPath = '/../client/';
// app.use(express.static(path.join(__dirname, clientPath)));
// app.use('/scripts', express.static(path.join(__dirname, clientPath + 'node_modules')));

app.use(express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, clientPath + 'index.html'));
// });

app.listen(port, function () {
  console.log('listening on port ' + port); 
});

mongoose.connect('mongodb://pilates:password@ds237475.mlab.com:37475/pilates', (err) => {
  if (!err) {
    console.log('connected to mongo');
  }
});

router(app);