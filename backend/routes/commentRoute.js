const express=require('express');
const router =express.Router();
const Post = require('../models/post');
const Comment= require('../models/comment');

router.delete('/posts/comments/delete/:id/:cmntid',async(req,res)=>{
        const{id,cmntid}=req.params;
        await Post.findByIdAndUpdate(id,{$pull:{comments:cmntid}});
        await Comment.findByIdAndDelete(cmntid);
        console.log("Comment Deleted");
})

router.post('/posts/comments/:id',async(req,res)=>{
const post= await Post.findById(req.params.id);
const cmnt= new Comment({body:req.body.comment,username:req.body.commentauthor});

post.comments.push(cmnt);

await cmnt.save();
await post.save();

res.render(cmnt);
})

module.exports=router;