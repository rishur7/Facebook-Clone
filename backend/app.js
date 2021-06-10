const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seedDB');
const postRoute = require('./routes/postRoute');
const commentRoute=require('./routes/commentRoute');
const session= require('express-session');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User = require('./models/user');
const authRoute=require('./routes/authRoute');

// app.use(express.urlencoded({ extended: true })); //form parsing
app.use(express.json()); //json parsing

mongoose.connect('mongodb://localhost:27017/FacebookClone', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })
mongoose.set('useFindAndModify', false);

app.use(session({
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

app.use(postRoute);
app.use(commentRoute);
app.use(authRoute);
// seedDB();

app.listen(7000, () => {
    console.log("Server Started at localhost:7000...");
})
