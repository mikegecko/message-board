var express = require('express');
var router = express.Router();
const { saveMessage, getMessages } = require('../db.js');


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const messages = await getMessages(); //Get messages from DB
    res.render('index', { title: 'Message Board', messages: messages });
  } catch(err){
    console.log(err);
  }
});

router.post('/new', async (req,res,next) => {
  const data = req.body;
  const message = ({content: data.messageText, author: data.authorText, added: new Date()})
  await saveMessage(message) //Save new message
  res.redirect('/');
});

module.exports = router;
