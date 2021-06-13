const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Offer = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    date: {type: Date, default: Date.now()}
}, {
    collection: 'offers'
})

module.exports = mongoose.model('Offer', Offer)