const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    msg: String
});

module.exports = mongoose.model('Post', userSchema);