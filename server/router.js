const express = require('express');
const User = require('./models/User');

let posts = [
    {message: 'hello'},
    {message: 'hi'}
]

module.exports = function(app) {

    const apiRoutes = express.Router();

    apiRoutes.get('/posts', (req, res, next) => {
        // console.log(req.body.name);
        return res.status(200).send(posts);
      });

    apiRoutes.post('/register', (req, res, next) => {
        const userData = req.body;
        const user = new User(userData);
        user.save((err, result) => {
            if (err) {
            console.log('saving user error');
            }
            res.sendStatus(200);
        });
    });

    app.use('/api', apiRoutes);
};