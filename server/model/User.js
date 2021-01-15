const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // default: 'faiza'
        required: [true, 'required']
    },
    email: {
        type: String,
        // default: 'faz.pak@gmail.com',
        required: [true, 'required']
    },
    pwd: {
        type: String,
        // default: '1111',
        required: [true, 'required']
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User