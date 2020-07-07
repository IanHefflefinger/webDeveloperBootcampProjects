const express               = require('express'),
      app                   = express(),
      port                  = 3000,
      mongoose              = require('mongoose'),
      passport              = require('passport'),
      bodyParser            = require('body-parser'),
      User                  = require('./models/user'),
      LocalStrategy         = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/auth_demo_app', {useNewUrlParser: true, useUnifiedTopology: true });

// ==============
// app setup
// ==============
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');
passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==============
// ROUTES
// ==============

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/secret', isLoggedIn, function(req, res) {
    res.render('secret');
});

// Auth routes
// show to registration form
app.get('/register', function(req, res) {
    res.render('register');
});

// handle user registration
app.post('/register', function(req, res) {
    User.register({username: req.body.username}, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.render('register');
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/secret');
            });
        }
    });
});

// login routes
// render login form
app.get('/login', function(req, res) {
    res.render('login');
});

// handle login authentication
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), function(req, res) {
    // do something?
})

// logout form
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));