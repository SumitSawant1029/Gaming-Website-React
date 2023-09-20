const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body ,validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { Await } = require('react-router-dom');
const JWT_SECRET = "GamingEc$mmerce"
// Create a User Using : POST "/api/auth/" . Doesn't require Auth
router.post('/',
[
    body('name','Enter a Valid Name').isLength({ min : 3 }),
    body('email','Enter a Valid Email').isEmail(),
    body('password','Enter valid Password').isLength({ min: 5 }),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({error: errors.array() });
    }
    try{
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry, a user with this email already exists"})
        }
        const salt = await bcrypt.genSalt(10);

        const secpass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email,
        })
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET)
        res.json({authtoken});
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Internel Error Occurred");
    }
})

router.post('/checkuser',
[
   
    body('email','Enter a Valid Email').isEmail(),
    body('password','Enter valid Password').exists(),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({error: errors.array() });
    }

    const {email,password}= req.body;
    try {
        let user = await User.findOne()
        if(!user){
            return res.status(400).json({error : "Please try Coreect crediantials"})
        }
        const passwordCompare = await bcrypt.compare(password,user.password);

        if(!passwordCompare){
            return res.status(400).json({error : "Please try Coreect crediantials"})
        }

        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET)
        res.json({authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internel Error Occurred");
    }
});


module.exports = router;
