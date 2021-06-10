const mongoose = require('mongoose');
const Post = require('./models/post');
const arr = [
    {
      author:"Rishabh",
      desc:"I love Real Madrid",
      image:"https://thefootballlovers.com/wp-content/uploads/2020/04/Real-Madrid-phone-lock-screen-wallpaper-full-HD-.jpg"
    },
    {
      author:"Cristiano Ronaldo",
      desc:"I am the Best",
      image:"https://en.as.com/en/imagenes/2019/09/24/football/1569310945_447431_noticia_normal.jpg"
    },
    {
      author:"Messi",
      desc:"Lmao Ronaldo nice joke",
      image:"https://i.pinimg.com/originals/bd/d2/8e/bdd28e104a6c4324f49d9a032b0f0ca6.jpg"
    }
]

function seedDB() {
    Post.insertMany(arr)
        .then(() => {
            console.log("DATA INSERTED");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = seedDB;