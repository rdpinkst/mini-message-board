const express = require('express');
const router = express.Router();

/* Post request to get info from form */
router.get('/', function(req, res, next) {
    res.render('form')
})

module.exports = router;
