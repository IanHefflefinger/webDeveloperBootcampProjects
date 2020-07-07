const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send("Hello, and welcome to my assignment");
});

app.get('/cookies', function(req, res) {
  console.log(req);
  res.send("check the console.");
});

app.get('/speak/:animal', function(req, res) {
  var animal = req.params.animal.toLowerCase();
  var animalSounds = {
    pig: 'Oink!',
    cow: 'Moo!',
    dog: 'Woof!',
    whale: 'uuuuuhhhhnng'
  }
  var sound = animalSounds[animal];
  res.send("The " + animal + " says " + sound);
});

app.get('/repeat/:word/:num', function(req, res) {
  var word = req.params.word;
  var num = Number(req.params.num);
  var string = '';
  for (var i = 0; i < num; i++) {
    string += word + ' ';
  }
  // string.trim();
  res.send(string);
});

app.get('*', function(req, res) {
  res.send("404: Page not found.")
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))