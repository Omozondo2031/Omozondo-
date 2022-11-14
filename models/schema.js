const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    price:{
        type: String,
        require: true
    },

    createdAT:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema)
module.exports = User