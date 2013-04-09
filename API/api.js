var express = require('express');
 
var app = express();
 
app.get('/topos', function(req, res) {
    res.send([{name:'lucas'}, {name:'dami'}, {name:'eliana'}, {name:'nico'}]);
});
app.get('/topos/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});
 
app.listen(3000);
console.log('Listening on port 3000...');