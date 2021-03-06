const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Importing files handling Post & Auth related APIs
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

// Connectiong to the MongoDB instance running on Atlas
mongoose.connect(
  "mongodb+srv://delwynpinto:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0.zszac.mongodb.net/practice-mean?retryWrites=true&w=majority"
)
.then(() =>{
  console.log("MongoDB connection successful");
})
.catch((error) =>{
  console.log("MongoDb connection failed", error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use("/images", express.static(path.join("images")));

// Setting required response headers & their values
app.use((req, res, next) =>{
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  res.setHeader("Access-Control-Allow-Origin", "*");
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
