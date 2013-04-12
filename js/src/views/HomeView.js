define( [ 'jquery', 'backbone', 'text!templates/home.html', 'views/TopoView',
		'models/TopoModel','collections/TopoCollection'], function($, Backbone, homeTemplate, TopoView,
		TopoModel, TopoCollection) {

	var HomeView = Backbone.View.extend( {

		el : ('.content'),
		
		initialize: function(collection) {
			this.topoCollection = collection; 
		},

		events : {
			'click button.button-filter' : 'filter',
			'click .add-topo' : 'postTopo'
		},

		topoView : undefined,

		postTopo : function() {
			var _this = this;

			this.topoCollection.create( {
				name : $('.name').val(),
				description : $('.description').val()
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