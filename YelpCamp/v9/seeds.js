const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

var data = [
    {
        name: 'Sunny Field',
        image: 'https://images.pexels.com/photos/2653168/pexels-photo-2653168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi tristique eu est vitae aliquam. Nullam porttitor consectetur nulla nec aliquet. Sed aliquam, lorem ut porta semper, ligula quam pellentesque neque, id elementum enim metus vitae massa. Duis sed malesuada odio. Cras leo metus, porta et volutpat pretium, dictum non magna. Duis vel tristique urna, lobortis mollis mi. Duis ac elit non massa aliquam commodo. Ut sit amet mi fermentum nisl sagittis facilisis. Integer nec magna non sapien eleifend convallis eu nec ligula.'
    },
    {
        name: 'Lonesome Table',
        image: 'https://images.pexels.com/photos/2873086/pexels-photo-2873086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi tristique eu est vitae aliquam. Nullam porttitor consectetur nulla nec aliquet. Sed aliquam, lorem ut porta semper, ligula quam pellentesque neque, id elementum enim metus vitae massa. Duis sed malesuada odio. Cras leo metus, porta et volutpat pretium, dictum non magna. Duis vel tristique urna, lobortis mollis mi. Duis ac elit non massa aliquam commodo. Ut sit amet mi fermentum nisl sagittis facilisis. Integer nec magna non sapien eleifend convallis eu nec ligula.'
    },
    {
        name: 'Popular Peaks',
        image: 'https://images.pexels.com/photos/2516423/pexels-photo-2516423.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi tristique eu est vitae aliquam. Nullam porttitor consectetur nulla nec aliquet. Sed aliquam, lorem ut porta semper, ligula quam pellentesque neque, id elementum enim metus vitae massa. Duis sed malesuada odio. Cras leo metus, porta et volutpat pretium, dictum non magna. Duis vel tristique urna, lobortis mollis mi. Duis ac elit non massa aliquam commodo. Ut sit amet mi fermentum nisl sagittis facilisis. Integer nec magna non sapien eleifend convallis eu nec ligula.'
    },
    {
        name: 'Ah, perfect',
        image: 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi tristique eu est vitae aliquam. Nullam porttitor consectetur nulla nec aliquet. Sed aliquam, lorem ut porta semper, ligula quam pellentesque neque, id elementum enim metus vitae massa. Duis sed malesuada odio. Cras leo metus, porta et volutpat pretium, dictum non magna. Duis vel tristique urna, lobortis mollis mi. Duis ac elit non massa aliquam commodo. Ut sit amet mi fermentum nisl sagittis facilisis. Integer nec magna non sapien eleifend convallis eu nec ligula.'
    }
]

function seedDB() {
    // remove all existing campgrounds
    Campground.deleteMany({}, function(err, deletedCampgrounds) {
        // if (err) {
        //     console.log(err);
        // } else {
        //     console.log(deletedCampgrounds);
        //     console.log('^removed above campgrounds^');
        //     // add campgrounds
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //             if (err) {
        //                 console.log(err);
        //             } else {
        //                 console.log('added campground');
        //                 // create campground
        //                 Comment.create({
        //                     text: 'Hey, I like camping!',
        //                     author: 'Sir Camps-a-lot'
        //                 }, function (err, comment) {
        //                     if (err) {
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log('Created new comment');
        //                     }
        //                 });
        //             }
        //         });
        //     });
        // }
    });
};

module.exports = seedDB;