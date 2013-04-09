require.config({
    paths : {
        jquery : '../libs/jquery/jquery-1.9.1.min',
        jqueryui : '../libs/jquery/jquery-ui1.10.2.min',
        underscore : '../libs/underscore/underscore.min',
        backbone : '../libs/backbone/backbone.min',
        templates : '../../templates'
    },
    shim : {
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ["underscore", "jquery"],
            exports : "Backbone"
        }
    }
});

require(['app'], function(App) {
    App.initialize();
});
