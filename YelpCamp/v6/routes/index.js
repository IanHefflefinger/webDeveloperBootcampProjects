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
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
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
    res.redirect('/');
});

// Check if user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

module.exports = router;