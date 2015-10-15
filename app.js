// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var googleTranslate = require('google-translate')("AIzaSyC0mw4NLJ7pP3LBhu7zBuis_Xg17GJWxAk")
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bestfriendsDB')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// var translapp = require('./Controller/servercontroller.js');

// Routes \\
var statsCtrl = require('./Controller/servercontroller')


app.get('/', function(req, res){
  res.sendFile("translate.html", {root: './public'})
});

app.get('/quiz', function(req, res){
  res.sendFile("quiz.html", {root: './public'})
});

// app.post('/submit', translapp.translateFunc);

app.post('/submit', function(req, res) {
	// console.log(req.body)
	googleTranslate.translate(req.body.word, req.body.trLanguage, function(err, translation) {
  	console.log(translation.translatedText);
  	res.send(translation.translatedText)
	});
})

app.post('/checkanswer', function(req, res) {
	googleTranslate.translate(req.body.word, req.body.endlang, function(err, translation) {
  	console.log(translation.translatedText);
  	res.send(translation.translatedText)
	});


})

app.post('/givetodb', statsCtrl.createStat)
app.post('/reset', statsCtrl.reset)









// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})