define([
    'jquery', 
    'underscore', 
    'backbone'
], function($, _, Backbone) {
    var TopoCollection = Backbone.Collection.extend({

        url : 'http://localhost:3000/topos',

        initialize : function() {
        }
    });
    return TopoCollection;
});
