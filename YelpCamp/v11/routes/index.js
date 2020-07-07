const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// HOME/ROOT - redirects to index
router.get('/', function(req, res) {
    res.render('landing');
});

// ========================
// AUTH ROUTES
// ========================

// show registration form
router.get('/register', function(req, res) {
    res.render('register');
});

// handle signup (registration) logic
router.post('/register', function(req, res) {
    var newUser = new User({ username : req.body.username });
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            return res.render("register", {"error": err.message});
        }
        passport.authenticate('local')(req, res, function () {
            req.flash('success', 'Welcome to YelpCamp, ' + user.username);
            res.redirect('/campgrounds');
        });
    });
});

// show login page
router.get('/login', function(req, res) {
    res.render('login');
});

// handle login authentication
router.post('/login', passport.authenticate('local', { 
    successRedirect: '/campgrounds',
    failureRedirect: '/login' }
));

// logout
router.get('/logout', function(req, res){
    req.logout();
    req.flash('success', 'logout successful');
    res.redirect('/');
});


module.exports = router;