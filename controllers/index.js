var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET: /about */
router.get('/about', (req, res) => {
  res.render('about', {
    title:'About Me | Adam Dera'
  })
});

/* GET: /projects */
router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects | Adam Dera',
    GitLink: 'https://github.com/ADera1220'
  })
})

/* GET: /contact */
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Me | Adam Dera',
    email: 'adera18@gmail.com'
  })
})

module.exports = router;
