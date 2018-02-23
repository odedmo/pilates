const express = require('express');
const User = require('./models/User');
const Post = require('./models/Post');
const auth = require('./auth');

module.exports = function (app) {

    const apiRoutes = express.Router();

    apiRoutes.get('/posts/:id', async (req, res) => {
        const author = req.params.id;
        const posts = await Post.find({author});
        res.send(posts);
    });

    apiRoutes.post('/post', (req, res, next) => {
        const postData = req.body;
        postData.author = '5a531b571cc9dd3a006a1aa6';

        let post = new Post(postData);

        post.save((err, result) => {
            if (err) {
                console.error('saving post error');
                return res.status(500).send({message: 'saving post error'});
            }
            res.sendStatus(200);
        });
    });

    apiRoutes.get('/users', async(req, res, next) => {
        try {
            const users = await User.find({}, '-password -__v');
            return res.send(users);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });

    apiRoutes.get('/profile/:id', async(req, res, next) => {
        try {
            const user = await User.findById(req.params.id, '-password -__v');
            return res.send(user);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });

    apiRoutes.post('/register', auth.register);

    apiRoutes.post('/login', auth.login)

    app.use('/api', apiRoutes);
};