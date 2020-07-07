const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// schema
const Campground = require('./models/campground');
const Comment = require('./models/comment');
// seed database
const seedDB = require('./seeds');
seedDB();

mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// HOME - redirects to index
app.get('/', function(req, res) {
    res.render('landing');
});

// INDEX    
app.get('/campgrounds', function(req, res) {
    Campground.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds
            res.render('index', {campgrounds: campgrounds});
        }
    });
    
});

// CREATE
app.post('/campgrounds', function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: description
    }
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    })
});

// NEW
app.get('/campgrounds/new', function(req, res) {
    res.render('new');
});

// SHOW
app.get('/campgrounds/:id', function(req, res) {
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render('show', {campground: foundCampground});
        }
    });
});

app.listen(port, () => console.log(`YelpCamp app listening at http://localhost:${port}`));