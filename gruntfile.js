module.exports = function (grunt) {
    grunt.initConfig({

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

        bower_concat: {
            all: {
                dest: 'builds/development/js/_plugins.js',
                cssDest: 'builds/development/css/_plugins.css',
            }
        }, //bower_concat

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

        wiredep: {
            task: {
                src: 'builds/development/**/*.html'
            }
        }, //wiredep

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

    //make default grunt task
    grunt.registerTask('default', ['wiredep', 'bower_concat', 'concat', 'sass', 'connect', 'watch']);

}; //Wrapper function