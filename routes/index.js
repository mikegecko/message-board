var express = require('express');
var router = express.Router();

const messages = [
  {
    text:"Hi there!",
    user: "Bobathy",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Max",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

//I dunno if this works right
router.post('/new', (req,res,next) => {
  const data = req.body;
  messages.push({text: data.messageText, user: data.authorText, added: new Date()})

  res.redirect('/');
});

module.exports = router;
