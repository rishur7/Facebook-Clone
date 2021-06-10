const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose'); //writes username and password schema automatically

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    }
});

userSchema.plugin(passportLocalMongoose); //adds hash and salt

const User=mongoose.model('User',userSchema);

module.exports=User;
