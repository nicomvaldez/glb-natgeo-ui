define([
	'jquery', 
	'underscore', 
	'backbone',
	'models/TopoModel'
], function($, _, Backbone, TopoModel) {
	var TopoCollection = Backbone.Collection.extend({
		model: TopoModel,
		url : 'http://localhost:3000/topos',
		initialize : function() {
		}
	
    });
	
	return TopoCollection;
});
