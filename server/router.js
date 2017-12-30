const express = require('express');

module.exports = function(app) {

    const apiRoutes = express.Router();

    apiRoutes.post('/test', (req, res, next) => {
        console.log(req.body.name);
        return res.status(200).send({ok: true});
      });

    app.use('/api', apiRoutes);
};