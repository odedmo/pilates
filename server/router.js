const express = require('express');
const User = require('./models/User');
const jwt = require('jwt-simple');

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

    apiRoutes.post('/login', async (req, res, next) => {
        const userData = req.body;
        const user = await User.findOne({
            email: userData.email
        });
        if (!user || userData.password !== user.password) {
            return res.status(401).send({message: 'invalid email or pasword'});
        }
        let payload = {};
        const token = jwt.encode(payload, 'my-secret');
        res.status(200).send({token});
    });

    app.use('/api', apiRoutes);
};