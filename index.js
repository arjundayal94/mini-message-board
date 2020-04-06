var express = require('express');
var router = express.Router();

 var names = [ "Amando" , "Charles "];
 var messages = [ " Hi there ", " Hello "];
 var date = [new Date(), new Date()];


  const full_messages = [
      
     names,
     messages,
     date
      
     ]
  
  
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', full_messages: full_messages, names:names, messages:messages, date:date});
});

router.get('/new', function(req, res, next) {

  res.render('form', {title: 'Post New Message'});

});

router.post('/new', function(req, res, next) {
        
    names.push(req.body.name);
    
    messages.push(req.body.message);
    
    date.push(new Date());
    
    res.redirect('/')
})
           
           
module.exports = router;
