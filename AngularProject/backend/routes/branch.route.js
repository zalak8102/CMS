
const express = require('express');
const app = express();
const branchRoute = express.Router();

// model
let Branch = require('../models/Branch');

// Add
branchRoute.route('/create').post((req, res, next) => {
    Branch.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All
branchRoute.route('/').get((req, res) => {
    Branch.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single
branchRoute.route('/read/:id').get((req, res) => {
    Branch.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update
branchRoute.route('/update/:id').put((req, res, next) => {
    Branch.findByIdAndUpdate(req.params.id, {
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
branchRoute.route('/delete/:id').delete((req, res, next) => {
    Branch.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = branchRoute;