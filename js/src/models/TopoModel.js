define( [ 'underscore', 'backbone' ], function(_, Backbone) {

	var TopoModel = Backbone.Model.extend( {
		url : 'http://localhost:3000/topos',
		defaults : {
			name: "",
			description: ""
		}

	});

	return TopoModel;

});