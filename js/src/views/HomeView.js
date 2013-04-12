define([
    'jquery', 
    'backbone', 
    'text!templates/home.html',
    'views/TopoView',
    'models/TopoModel'
], function($, Backbone, homeTemplate, TopoView, TopoModel) {

    var HomeView = Backbone.View.extend({
        
        el : ('.content'),
        
        initialize : function() {
            this.topoView = new TopoView();  
        },

        events : {
            'click button.button-filter' : 'filter',
            'click .add-topo' : 'postTopo'
        },
        
        postTopo : function() {
            var _this = this;

            var topo = new TopoModel();
            
            topo.save({
                name : $('.name').val(),
                description : $('.description').val()
            }, {
                success: function() {
                    _this.render();
                }
            });
        },        

        render : function() {
            this.$el.html(homeTemplate);
            this.topoView.render();            
        },

        filter : function() {
            this.topoView.render();
        }
    });

    return HomeView;
});