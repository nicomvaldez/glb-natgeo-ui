define([
    'jquery', 
    'underscore', 
    'backbone', 
    'collections/TopoCollection', 
    'text!templates/topoList.html'
], function($, _, Backbone, TopoCollection, topoListTemplate) {

    var TopoView = Backbone.View.extend({
        el : $("ul.content"),

        initialize : function() {
            var _this = this;

            var onDataHandler = function(collection) {
                _this.render();
            };

            this.topoCollection = new TopoCollection();
            this.topoCollection.fetch({
                success : onDataHandler
            });
        },

        render : function() {
            var data = {
                topos : this.topoCollection.toJSON(),
                _ : _
            };

            var compiledTemplate = _.template(topoListTemplate, data);
            this.$el.append(compiledTemplate);
        }
    });

    return TopoView;
});
