// 1. Create a directory named 02_exercise.

// 2. Inside the 02_exercise directory, create a file named data.js. Copy and paste the provided code to define the posts data.

// const posts = [
//   {
//     id: 1,
//     title: "Introduction to Express",
//     content: "Express is a web application framework for Node.js.",
//   },
//   {
//     id: 2,
//     title: "Getting Started with APIs",
//     content: "Learn the basics of building APIs with Express.",
//   },
//   {
//     id: 3,
//     title: "Node.js Best Practices",
//     content:
//       "Explore best practices for writing clean and efficient Node.js code.",
//   },
// ];

// module.exports = posts;

// 3. Create a file named app.js in the same directory.

// 4. In the app.js file, import the express module and create an Express app.
const express = require('express');

const app = express();

// 5. Import the posts data from the data.js file.

const posts = require('./data.js');

// 6. Set up the app to listen on port 3000 using the app.listen() method. Print a message in the console to indicate that the server is running.

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});

// 7. Define a route at /api/posts that sends a JSON response containing all blog posts.

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// 8. Define a route at /api/posts/:postID that takes a postID parameter from the URL. Use this parameter to find and send a JSON response with the details of the specific post with the given ID. If the post is not found, send a 404 status with a "Post not found" message.

app.get('/api/posts/:postID', (req, res) => {
  const id = Number(req.params.postID);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).send('Post not found');
  }

  res.json(post);
});

// 9. Define a route at /api/search that uses the query string parameter title to filter posts based on their titles. Convert the query parameter to lowercase and use it to filter posts whose titles contain the given text. Send a JSON response with the filtered posts or a message if no matches are found.

app.get('/api/query', (req, res) => {
  const title = req.query.title.toLowerCase();
  console.log(title);
  const post_result = posts.filter((post) =>
    post.title.toLowerCase().includes(title)
  );

  if (post_result.length < 1) {
    return res.status(200).send('No post matched your search');
  }
  res.json(post_result);
});

// 10. Run the app using Node.js and test the different routes using your web browser or tools like curl and Postman.

// 11. Run your app.js file using Node.js: node app.js.

// 12. Open your web browser or use tools like curl and Postman to test the different routes. For example:

// - http://localhost:3000/api/posts to see all posts.

// - http://localhost:3000/api/posts/2 to see details of the post with ID 2.

// - http://localhost:3000/api/search?title=express to filter posts by title.
