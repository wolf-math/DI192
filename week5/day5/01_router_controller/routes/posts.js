const express = require('express');
const router = express.Router();

const { getPosts, getPost } = require('../controllers/posts.js');

router.get('/', getPosts);
router.get('/:postID', getPost);

module.exports = router;
