define([
    'jquery', 
    'underscore', 
    'backbone', 
    'collections/TopoCollection', 
    'text!templates/topoList.html'
], function($, _, Backbone, TopoCollection, topoListTemplate) {

    var TopoView = Backbone.View.extend({
    
        el : ('.list'),
        
        render : function() {
            
            var _this = this;
            
            var onDataHandler = function(collection) {
                var data = {
                    topos : _this.topoCollection.toJSON(),
                    _ : _
                };
                var compiledTemplate = _.template(topoListTemplate, data);
                _this.$el.html(compiledTemplate);
            };

            this.topoCollection = new TopoCollection();
            this.topoCollection.fetch({
                success : onDataHandler
            });
        }
    });

    return TopoView;
});
