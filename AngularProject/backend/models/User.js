const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    designation: {
        type: String
    },
    dob: {type: Date, default: Date.now()},
    phoneNumber: {
        type: Number
    },
    salary: {
        type: Number
    },
    branch: {
        type: String
    },
    courier:{
        type:Number
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', User)