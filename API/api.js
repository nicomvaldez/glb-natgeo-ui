var express = require('express');

var app = express();

var allowCrossDomain = function(req, res, next) {

    
    // Added other domains you want the server to give access to
    // WARNING - Be careful with what origins you give access to
//    var allowedHost = ['http://127.0.0.1', 'http://localhost'];
//
//    if (allowedHost.indexOf(req.headers.origin) !== -1) {
//        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//        res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
        next();
//    } else {
//        res.send({
//            auth : false
//        });
//    }
}

app.configure(function() {
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
});

//demo data
var topos = [
    { name: "lucas", description: "Lucas desc"},
    { name: "eliana", description: "Eli desc"},
    { name: "damian", description: "Damian desc"},
    { name: "nico", description: "Nico desc"}
];

app.get('/topos', function(req, res) {
	res.send(topos);
});

app.get('/topos/:id', function(req, res) {
	var id = req.params.id;
	res.send(topos[id]);
});

app.get('/topos/name/:name', function(req, res) {
	var result = {};
	var name = req.params.name;
	
	for (var key in topos) {
		
		if (topos[key].name == name) {
	    	result = topos[key];
	    }
	}
	
	res.send(result);
});

app.del('/topos/:id', function(req, res){
	res.send({id: req.params.id});
});

app.post('/topos', function(req, res){
	
	var topo = JSON.parse(req.body.model);
	
	topos.push({name: topo.name, description: topo.description});
	
	console.log(topos);
	
	res.send({name: topo.name, description: topo.description});

});

app.listen(3000);
console.log('Listening on port 3000...');
