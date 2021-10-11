// Use express package and create a Router
const express = require('express');
const router = express.Router();

// Add reference to Model for About
const About = require('../models/about');

// GET: '/abouts' => show the About index view
router.get('/', (req,res) => {
});

module.exports = router;