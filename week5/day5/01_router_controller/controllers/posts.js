const posts = require('../postinfo.js');

function getPosts(req, res) {
  res.json(posts);
}

function getPost(req, res) {
  const id = Number(req.params.postID);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send('Post not found');
  }
  res.json(post);
}

module.exports = {
  getPosts,
  getPost
};
