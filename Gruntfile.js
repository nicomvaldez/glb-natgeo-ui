module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : '<%= pkg.name %>.js',
                dest : 'build/<%= pkg.name %>.min.js'
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
            all : ['Gruntfile.js']
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
