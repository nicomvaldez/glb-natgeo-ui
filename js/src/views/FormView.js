define( [ 'jquery', 'underscore', 'backbone', 'models/TopoModel',
		'text!templates/topoAdd.html' ], function($, _, Backbone, TopoModel,
		topoAddTemplate) {
	var FormView = Backbone.View.extend( {
		el : '.form-container',
		render : function() {
			$(this.el).html(topoAddTemplate);
		},
		events : {
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
		}
	});

	return FormView;

});