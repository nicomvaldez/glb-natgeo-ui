define( [ 'jquery', 'underscore', 'backbone', 'collections/TopoCollection',
		'text!templates/topoList.html' ], function($, _, Backbone,
		TopoCollection, topoListTemplate) {

	var TopoView = Backbone.View.extend( {

		el : ('.list'),

		initialize : function() {

			var _this = this;

			this.topoCollection = new TopoCollection();
			this.topoCollection.fetch();
			
            this.listenTo(this.topoCollection,'all', this.render);
            
            this.render();
		},

		render : function() {
			var data = {
				topos : this.topoCollection.toJSON(),
				_ : _
			};
			var compiledTemplate = _.template(topoListTemplate, data);
			this.$el.html(compiledTemplate);
		}
	});

	return TopoView;
});
