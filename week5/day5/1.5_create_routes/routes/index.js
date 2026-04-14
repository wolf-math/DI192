const express = require('express');
const router = express.Router();

const { getInfo } = require('../controllers/index.js');

router.get('/', getInfo);

module.exports = router;
