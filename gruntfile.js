module.exports = function (grunt) {
    grunt.initConfig({

        //concatinate my js files into a single file 
        concat: {
            options: {
                separator: '\n\n//-----------------------------------\n',
                banner: '\n\n//-----------------------------------\n',
            },
            dist: {
                src: ['components/js/*.js'],
                dest: 'builds/development/js/scripts.js'
            }
        }, //concat

        //concatinate the various js and css from bower components into single files
        bower_concat: {
            all: {
                dest: 'builds/development/js/_plugins.js',
                cssDest: 'builds/development/css/_plugins.css',
            }
        }, //bower_concat

        //convert scss into css
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                },
                files: [{
                    src: 'components/scss/style.scss',
                    dest: 'builds/development/css/style.css',
                }]
            }
        }, //sass

        //NOT IN USE
        //used to wire bower components directly into html files
        wiredep: {
            task: {
                src: 'builds/development/**/*.html'
            }
        }, //wiredep

        //creates a live server to use for live reload
        connect: {
            server: {
                options: {
                    host: 'localhost',
                    port: '3000',
                    base: 'builds/development/',
                    livereload: true
                }
            }
        }, //connect

        //watches changes in files and then will reload the page when noticed
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['builds/development/**/*.html', 'components/scripts/**/*.js', 'components/scss/**/*.scss'],
                tasks: ['concat', 'sass']
            }
        } //watch

    }); //initConfig section

    //load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //make default grunt task
    grunt.registerTask('default', ['wiredep', 'bower_concat', 'concat', 'sass', 'connect', 'watch']);

}; //Wrapper function