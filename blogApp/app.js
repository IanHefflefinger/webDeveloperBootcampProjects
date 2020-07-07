const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

// app config
mongoose.connect('mongodb://localhost/blog_app', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// mongoose model config
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// test data - works
// Blog.create({
//     title: 'Test title',
//     image: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et tellus at purus ornare vestibulum. Proin vulputate eros ut massa tempus efficitur. Integer sit amet vulputate libero. Duis et volutpat neque. Praesent semper dolor eget turpis tempus, et viverra ex eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor dui sit amet libero consectetur, non pulvinar massa tincidunt. Maecenas sed hendrerit sapien. Maecenas laoreet pellentesque diam, sed lobortis arcu mollis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     // created
// });

// routes
app.get('/', function(req, res) {
    res.redirect('/blogs');
});

// INDEX ROUTE
app.get('/blogs', function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err)
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get('/blogs/new', function(req, res) {
    res.render('new');
});

// CREATE ROUTE
app.post('/blogs', function(req, res) {
    // sanitize incoming data in the body *body segment is evaluated so users can add html and styling *other fields are NOT evaluated by ejs
    req.body.blog.body = req.sanitize(req.body.blog.body);
    // create blog
    Blog.create(req.body.blog, function(err, newBlog) {
        if (err) {
            console.log(err);
        } else {
            // redirect to index to show posts
            res.redirect('/blogs');
        }
    });
    // redirect to index
});

// SHOW ROUTE
app.get('/blogs/:id', function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            console.log(err);
        } else {
            res.render('show', {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res) {
    // display edit page
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            console.log(err);
        } else {
            res.render('edit', {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put('/blogs/:id', function(req, res) {
    // sanitize incoming data in the body *body segment is evaluated so users can add html and styling *other fields are NOT evaluated by ejs
    req.body.blog.body = req.sanitize(req.body.blog.body);
    // update data
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete('/blogs/:id', function(req, res) {
    // destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/blogs');
        }
    });
    // redirect
});


app.listen(port, () => console.log(`Blog app listening at http://localhost:${port}`))