const express = require('express');
let mongoose = require("mongoose");
const router = express.Router();
const {
    enquiryinert, enquirydata, deleten, updaten
} = require('../controllers/web/user.controller');
const { enquirymodel } = require('../models/enquiry.model');

router.post('/en-insert', enquiryinert);
router.get('/enquirydata', enquirydata);
router.delete('/deleten/:id', deleten);
router.put('/updaten/:id', updaten);

module.exports = router;
