module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'js/src/main.js',
                dest : 'build/main.min.js'
            },
            my_target : {
                files : {
                    'js/libs/backbone/backbone.min.js' : ['js/src/backbone/backbone.js'],
                    'js/libs/underscore/underscore.min.js' : ['js/src/underscore/underscore.js']
                }
            }
        },
        stylus : {
            compile : {
                options : {
                    paths : ['css/stylus/includes'],
                    import : ['variables']
                },
                files : {
                    'css/styles.css' : 'css/stylus/home.styl'
                }
            }
        },
        jshint : {
            all : ['Gruntfile.js', 'js/src/*.js', 'js/src/collections/*.js', 'js/src/models/*.js', 'js/src/views/*.js']
        },
        watch : {
            files : ['css/stylus/includes/*.styl', 'css/stylus/*.styl'],
            tasks : ['stylus']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //loading stylus plugin
    grunt.loadNpmTasks('grunt-contrib-stylus');

    //loading jshint plugin
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //loading watch plugin
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'stylus', 'jshint', 'watch']);

};
