
module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, dest: 'build/fonts/', src: 'node_modules/font-awesome/fonts/*.*' },
                    { expand: true, dest: 'build/', src: 'images/*.*' },
                    { expand: true, dest: 'build/', src: 'html/*.html' },
                    { expand: true, dest: 'build/', src: '*.html' }
                ]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/app.min.js': [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-route/angular-route.js',
                        'scripts/*.js'
                    ]
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/styles.min.css': [
                        'build/*.css'
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'build',
                    middleware: function(connect, options, middlewares) {
                        var modRewrite = require('connect-modrewrite');
            
                        // enable Angular's HTML5 mode
                        middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.svg|\\.jpg|\\.css|\\.png$ /index.html [L]']));
            
                        return middlewares;
                      }
                }
            }
        },

        sass: {                              
            dist: {                            
                options: {                       
                    style: 'expanded'
                },
                files: {                         
                    'build/styles.css': 'sass/styles.scss'
                }
            }
        },

        watch: {
            scripts: {
                files: ['scripts/*.js', 'sass/*.scss', 'html/*.html', 'index.html'],
                tasks: ['copy', 'uglify', 'sass', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['copy', 'uglify', 'sass', 'cssmin']);
    grunt.registerTask('serve', ['build', 'connect:server:keepalive']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('default', () => {
        console.log('Choose dev/build/serve grunt task');
    });
}