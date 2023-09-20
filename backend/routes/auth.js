const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body ,validationResult } = require('express-validator')

// Create a User Using : POST "/api/auth/" . Doesnt require Auth
router.post('/',
[
    body('name','Enter a Valid Name').isLength({ min : 3 }),
    body('email','Enter a Valid Email').isEmail(),
    body('password','Enter valid Password').isLength({ min:5 }),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({error :errors.array() });
    }
    try{
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry A user with this already exist"})
        }
        user = await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
    
        })
        res.json(user)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some Error Occured")
    }
})

module.exports = router