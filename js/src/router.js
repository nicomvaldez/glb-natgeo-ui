define([
  'jquery',
  'underscore',
  'backbone',
  'views/TopoView',
  'views/HomeView'
], function($, _, Backbone, TopoView, HomeView) {
  
 var AppRouter = Backbone.Router.extend({
    routes: {
      'topos': 'showTopos',
      // Default
      '*actions': 'defaultAction'        
    },
    

  });
  
  var initialize = function(){
    var app_router = new AppRouter;
    
    var homeView = new HomeView();

    app_router.on('route:defaultAction', function (actions) {
        // By default go to topos view (when the url does not match)
        app_router.navigate("#/topos", true)
    });
    
    app_router.on('route:showTopos', function(){
        var topoView = new TopoView();
    });    
  
  };
  return { 
    initialize: initialize
  };
});
