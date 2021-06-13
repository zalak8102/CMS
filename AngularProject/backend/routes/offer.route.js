
const express = require('express');
const app = express();
const offerRoute = express.Router();

// Employee model
let Offer = require('../models/Offer');

// Add
offerRoute.route('/create').post((req, res, next) => {
    Offer.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All
offerRoute.route('/').get((req, res) => {
    Offer.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single
offerRoute.route('/read/:id').get((req, res) => {
    Offer.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update
offerRoute.route('/update/:id').put((req, res, next) => {
    Offer.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete
offerRoute.route('/delete/:id').delete((req, res, next) => {
    Offer.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = offerRoute;