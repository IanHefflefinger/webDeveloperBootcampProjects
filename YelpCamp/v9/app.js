const express               = require('express'),
      app                   = express(),
      port                  = 3000,
      mongoose              = require('mongoose'),
      bodyParser            = require('body-parser'),
      passport              = require('passport'),
      LocalStrategy         = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      User                  = require('./models/user'),
      Campground            = require('./models/campground'),
      Comment               = require('./models/comment'),
      seedDB                = require('./seeds');

// Requiring Routes
const commentRoutes         = require('./routes/comments'),
      campgroundRoutes      = require('./routes/campgrounds'),
      authRoutes            = require('./routes/index');

// APP SETUP
mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
// seedDB(); - seed the database with camps

// PASSPORT CONFIGURATION
app.use(session = require('express-session')({
    secret: 'Capn Crunch is an excellent name for cereal',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

// ROUTES
app.use('/', authRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);


app.listen(port, () => console.log(`YelpCamp app listening at http://localhost:${port}`));