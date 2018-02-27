const User = require('./models/User');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');

module.exports = {
    register: (req, res, next) => {
        const userData = req.body;
        const user = new User(userData);
        user.save((err, result) => {
            if (err) {
                console.log('saving user error');
            }
            res.sendStatus(200);
        });
    },
    login: async(req, res, next) => {
        const loginData = req.body;
        const user = await User.findOne({
            email: loginData.email
        });
        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
            if (!isMatch) {
                return res.status(401).send({message: 'invalid email or pasword'});
            }
            let payload = {
                sub: user._id
            };
            const token = jwt.encode(payload, 'my-secret');
            res.status(200).send({token});
        });
    }
}