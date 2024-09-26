// Create web server
// 1. Import express
const express = require('express');
// 2. Create an app
const app = express();
// 3. Define the port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// 6. Create a route for comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});
// 7. Create a route for comments with an id
app.get('/comments/:id', (req, res) => {
  res.send(`Comment ${req.params.id}`);
});
// 8. Create a route for comments with an id and a subcomment
app.get('/comments/:id/:subcomment', (req, res) => {
  res.send(`Comment ${req.params.id} - Subcomment ${req.params.subcomment}`);
});
// 9. Create a route for comments with an id and a subcomment and a subsubcomment
app.get('/comments/:id/:subcomment/:subsubcomment', (req, res) => {
  res.send(`Comment ${req.params.id} - Subcomment ${req.params.subcomment} - Subsubcomment ${req.params.subsubcomment}`);
});
// 10. Create a route for comments with an id and a subcomment and a subsubcomment and a subsubsubcomment
app.get('/comments/:id/:subcomment/:subsubcomment/:subsubsubcomment', (req, res) => {
  res.send(`Comment ${req.params.id} - Subcomment ${req.params.subcomment} - Subsubcomment ${req.params.subsubcomment} - Subsubsubcomment ${req.params.subsubsubcomment}`);
});
// 11. Create a route for comments with an id and a subcomment and a subsubcomment and a subsubsubcomment and a subsubsubsubcomment
app.get('/comments/:id/:subcomment/:subsubcomment/:subsubsubcomment/:subsubsubsubcomment', (req, res) => {
  res.send(`Comment ${req.params.id} - Subcomment ${req.params.subcomment} - Subsubcomment ${req.params.subsubcomment} - Subsubsubcomment ${req.params.subsubsubcomment} -