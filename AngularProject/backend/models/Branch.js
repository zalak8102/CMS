const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Branch = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    totalEmployee: {
        type: Number
    },
    rating:{
        type:Number
    }
}, {
    collection: 'branches'
})

module.exports = mongoose.model('Branch', Branch)