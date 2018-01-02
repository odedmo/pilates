const express = require('express');

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

    app.use('/api', apiRoutes);
};