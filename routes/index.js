var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/get/:name', function(req, res){
   res.send('Hello ' + req.params.name + ' !');
});

router.get('/greet/:from/:to', function(req, res){
    return res.render('greet', {
        from: req.params.from,
        to: req.params.to
    })
});

router.post('/formpost', function(req, res){
    console.log(req.params)
    return res.render('result', {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
});

router.get('/loop', (req, res) => {
    let persons = [{
        name: "Sam Veg",
        position: "Khali Pili Admi",
        specialization: "Khana" 
    }, {
        name: "Yash Want",
        position: "Bhut Khali Pili Admi",
        specialization: "Kuchh ni"
    }, {
        name: "Vri Has",
        position: "Bhut Busy Admi",
        specialization: "Chanabata Hai"
    }]
    return res.render('loop', {
        data: persons
    })
})

router.get('/form', (req, res) => {
    return res.render('forms')
})

router.get('/', (req, res) => {
    return res.render('index')
})

//export this router to use in our index.js
module.exports = router;