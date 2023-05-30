//
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Use body-parser middleware to parse HTTP request body
app.use(bodyParser.urlencoded({ extended: true }));



// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//this is the regular  js object for shcema.
const articleSchema = {
    title:String,
    content:String
};

const Article = mongoose.model("Articel", articleSchema);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, World!' });
});

// Start the server
app.listen(3000, () => {
  console.log(`Server running at port 3000`);
});