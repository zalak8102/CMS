
const express = require('express');
const app = express();
const courierRoute = express.Router();

//  model
let Courier = require('../models/Courier');

// Add
courierRoute.route('/create').post((req, res, next) => {
    Courier.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All
courierRoute.route('/').get((req, res) => {
    Courier.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single
courierRoute.route('/read/:id').get((req, res) => {
    Courier.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update
courierRoute.route('/update/:id').put((req, res, next) => {
    Courier.findByIdAndUpdate(req.params.id, {
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
courierRoute.route('/delete/:id').delete((req, res, next) => {
    Courier.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = courierRoute;