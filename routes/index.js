const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  }
]

var express = require('express');
var router = express.Router();

/* POST data from form */
router.post('/new', function(req, res, next) {
  const newPost = req.body;
  if(newPost.user && newPost.message) {
    const post = {
      text: newPost.message,
      user: newPost.user,
      added: new Date(),
    }
    messages.push(post);
  } 
  res.redirect('/')

})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
