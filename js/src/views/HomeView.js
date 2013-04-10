define([
    'jquery', 
    'backbone', 
    'text!templates/home.html',
    'views/TopoView'
], function($, Backbone, homeTemplate, TopoView) {

    var HomeView = Backbone.View.extend({
        el : $(".content"),

        events : {
            'click button.button-filter' : 'filter'
        },

        initialize : function() {
            var _this = this;
            _this.render();
        },

        render : function() {
            this.$el.append(homeTemplate);
        },

        filter : function() {
            var topoView = new TopoView();
        }
    });

    return HomeView;
});