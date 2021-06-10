const express=require('express');
const router=express.Router();
const Post=require('../models/post');
const {isLoggedIn}=require('./logininfo');

router.get('/logincheck',isLoggedIn,(req,res)=>{
   res.send("Yes you are logged in");
});

router.get('/allposts',isLoggedIn,async(req,res)=>{
const posts=await Post.find({});
res.send(posts);
});

router.post('/posts',async(req,res)=>{
    const post = await Post.create(req.body);
    res.send(post);
})

router.get('/posts/edit/:id',async(req,res)=>{
    const post= await Post.findById(req.params.id).populate('comments');
    res.send(post);
})

router.patch('/posts/edit/:id',async(req,res)=>{
    const post=await Post.findByIdAndUpdate(req.params.id,req.body);
    res.send(post);
})

router.delete('/posts/delete/:id',async(req,res)=>{
    const post=await Post.findByIdAndDelete(req.params.id);
    res.send(post);
})
module.exports=router;