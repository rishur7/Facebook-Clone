const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/user');
const {isLoggedIn}=require('./logininfo');

router.get('/currentuser',async(req,res)=>{
    res.send(req.user);
})
router.post('/reg',async(req,res)=>{
    const user={
        username: req.body.username,
        email: req.body.email
    }
    const newUser=await User.register(user,req.body.password);
    res.redirect('/');
})

router.post('/log',passport.authenticate('local',{failureMessage:"Failed"}),(req,res)=>{
    console.log("Login Successfully");
    res.send("Success");
    })

router.get('/logout', (req, res) => {
    req.session.destroy();
    console.log("User Logged Out");
})

router.get('/allusers',isLoggedIn,async(req,res)=>{
    const users=await User.find({});
    res.send(users);
    });

module.exports=router;