const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Courier = new Schema({
    id: {
        type: String
    },
    userid: {
        type: String
    },
    deliveryboyid:{
        type:String
    },
     source: {
        type: String
    },
    destination: {
        type: String
    },
    cost: {
        type:Number
    },
    delivered:{
        type: Boolean
    },
    date: {type: Date, default: Date.now()},
    weight: {
        type:Number
    },
    length: {
        type:Number
    },
    width: {
        type:Number
    },
    height: {
        type:Number
    }
}, {
    collection: 'couriers'
})

module.exports = mongoose.model('Courier', Courier)