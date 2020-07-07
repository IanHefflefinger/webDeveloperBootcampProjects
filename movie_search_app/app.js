const express = require('express')
const app = express()
const port = 3000
const request = require('request')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('search')
})

app.route('/results')
    .get(function(req, res) {
        var searchTerm = req.query.search;
        var URL = 'http://www.omdbapi.com/?t=' + searchTerm + '&apikey=thewdb';
        request(URL, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var apiData = JSON.parse(body);
                res.render('results', {pageData: apiData})
            } else {
                console.log("error occurred")
            }
        });
    })
    .post(function(req, res) {
        // do somethiing
    })

app.listen(port, () => console.log(`Movie app listening at http://localhost:${port}`))