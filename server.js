var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res) {
	console.log("I received a GET request");
	person1 = {
		name: 'Tim',
		email: 'Tim@oisdjf.com',
		number: '(111) 111-1111'
	};
	person2 = {
		name: 'Tom',
		email: 'Tom@oisdjf.com',
		number: '(111) 111-1121'
	};
	person3 = {
		name: 'Bloop',
		email: 'Bloop@oisdjf.com',
		number: '(111) 311-1111'
	};
	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(8080);
console.log("Server running on port 8080");