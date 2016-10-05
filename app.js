var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.get('/', function(req, res){
	res.send('Hello World Express!!');
});
app.get('/template', function(req, res){
	res.render('temp', {time:Date()});
})
app.get('/dynamic', function(req, res){
	var time = Date();
	var output = `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
		</head>
		<body>
			<h1>Hello, dynamic!</h1>
			${time}
		</body>
	</html>`;
	res.send(output);
})
app.get('/route', function(req, res) {
	res.send('Hello Router, <img src="/person.jpg">');
})
app.get('/login', function(req, res){
	res.send('Login Please');
})
app.listen(3000, function(){
	console.log('Conneted 3000 port!');
});