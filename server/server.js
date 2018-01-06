const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const apiRoutes = express.Router();
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/User');

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

app.post('/register', (req, res) => {
  const userData = req.body;
  const user = new User(userData);
  user.save((err, result) => {
    if (err) {
      console.log('saving user error');
    }
    res.sendStatus(200);
  });
});

app.listen(port, function () {
  console.log('listening on port ' + port); 
});

mongoose.connect('mongodb://pilates:password@ds237475.mlab.com:37475/pilates', (err) => {
  if (!err) {
    console.log('connected to mongo');
  }
});

router(app);