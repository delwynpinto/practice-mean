const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');

const app = express();

mongoose.connect("mongodb+srv://delwynpinto:w1TNc6WsQUt8N7zt@cluster0.zszac.mongodb.net/practice-mean?retryWrites=true&w=majority")
.then(() =>{
  console.log("MongoDB connection successful");
})
.catch(() =>{
  console.log("MongoDb connection failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  next();
});

//Mongo CLuster user password : w1TNc6WsQUt8N7zt

app.use("/api/posts", postRoutes);

module.exports  = app;
