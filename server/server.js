const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const clientPath = '/../client/';
const apiRoutes = express.Router();
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');

app.use(express.static(path.join(__dirname, clientPath)));
app.use('/scripts', express.static(path.join(__dirname, clientPath + 'node_modules')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, clientPath + 'index.html'));
// });

app.listen(port, function () {
  console.log('listening on port ' + port); 
});

router(app);