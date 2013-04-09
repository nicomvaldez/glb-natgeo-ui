var express = require('express');

var app = express();

var allowCrossDomain = function(req, res, next) {

    console.log(req.headers.origin);
    // Added other domains you want the server to give access to
    // WARNING - Be careful with what origins you give access to
    var allowedHost = ['http://127.0.0.1', 'null'];

    if (allowedHost.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', req.headers.origin)
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
        next();
    } else {
        res.send({
            auth : false
        });
    }
}

app.configure(function() {
    app.use(allowCrossDomain);
});

app.get('/topos', function(req, res) {
    res.send([{
        name : 'lucas'
    }, {
        name : 'dami'
    }, {
        name : 'eliana'
    }, {
        name : 'nico'
    }]);
});
app.get('/topos/:id', function(req, res) {
    res.send({
        id : req.params.id,
        name : "The Name",
        description : "description"
    });
});

app.listen(3000);
console.log('Listening on port 3000...');
