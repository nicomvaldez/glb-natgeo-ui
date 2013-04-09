define(['jquery', 'underscore', 'backbone', 'router'], function($, _, Backbone, Router) {
    var initialize = function() {
        Backbone.emulateJSON = true;
        Backbone.emulateHTTP = true;
        Router.initialize();
    };
    return {
        initialize : initialize
    };
});
