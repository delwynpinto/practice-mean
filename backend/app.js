const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

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
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  next();
});

//Mongo CLuster user password : w1TNc6WsQUt8N7zt

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

module.exports  = app;
