const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body , validator } = require('express-validator')

// Create a User Using : POST "/api/auth/" . Doesnt require Auth
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send("hello");
})

module.exports = router