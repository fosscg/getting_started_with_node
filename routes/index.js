var express = require('express');
var router = express.Router();

router.get('/get/:name', function(req, res){
   res.send('Hello ' + req.params.name + ' !');
});

router.get('/greet/:from/:to', function(req, res){
    res.send('Hello from ' + req.params.from + ' to ' + req.params.to);
});

router.post('/post', function(req, res){
   res.send('POST route on things.');
});

router.get('/', (req, res) => {
    console.log("My first express application at FB Developer Circle!")
    return res.send('Hello FB Developers Circle!')
})

//export this router to use in our index.js
module.exports = router;