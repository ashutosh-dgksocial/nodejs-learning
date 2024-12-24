const express = require('express');
const router = express.Router();
const path = require('path');
const data = {};
data.employees = require('../../data/employees.json');
router.route('/')

    .get((req, res) => {
        res.json(data.employees);
    }).post((req, res) => {
        res.json({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName
        })
    }).put((req, res) => {
        res.json({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName
        })
    }).delete((req, res) => {
        res.json({
            "firstName": req.body.id,
            "firstName": req.body.id
        })
    })

module.exports = router;