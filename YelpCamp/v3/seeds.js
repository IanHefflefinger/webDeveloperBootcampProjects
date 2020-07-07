const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

var data = [
    {
        name: 'Sunny Field',
        image: 'https://images.pexels.com/photos/2653168/pexels-photo-2653168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'RV parked in a beautiful sunny field'
    },
    {
        name: 'Lonesome Table',
        image: 'https://images.pexels.com/photos/2873086/pexels-photo-2873086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'Oh, what a sad table - all by itself in the woods'
    },
    {
        name: 'Popular Peaks',
        image: 'https://images.pexels.com/photos/2516423/pexels-photo-2516423.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'There are so many people ay up here in the mountains!'
    },
    {
        name: 'Ah, perfect',
        image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'This is a nice spot to hang out and enjoy solitude'
    }
]

function seedDB() {
    // remove all existing campgrounds
    Campground.deleteMany({}, function(err, deletedCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            console.log(deletedCampgrounds);
            console.log('^removed above campgrounds^');
            // add campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('added campground');
                        // create campground
                        Comment.create({
                            text: 'Hey, I like camping!',
                            author: 'Sir Camps-a-lot'
                        }, function (err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log('Created new comment');
                            }
                        });
                    }
                });
            });
        }
    });
};

module.exports = seedDB;