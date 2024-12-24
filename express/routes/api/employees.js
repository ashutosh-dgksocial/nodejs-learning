const express = require('express');
const router = express.Router();
const employeesController = require("../../controller/employeeController");

router.route('/')
    .get().post().put().delete();

router.route('/:id')
    .get;


module.exports = router;