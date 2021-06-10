const mongoose = require('mongoose');
const comment=require('./comment');

const postschema = new mongoose.Schema({
    author: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:true
    },
    image: {
        type: String,
        minLength:10
    },
    comments:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }
]
})

const Post = mongoose.model('Post', postschema);

module.exports = Post;