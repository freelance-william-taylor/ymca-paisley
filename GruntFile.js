
const rewrite = require( "connect-modrewrite" );

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
                        'node_modules/font-awesome/css/font-awesome.css',
                        'node_modules/bulma/css/bulma.css',
                        'css/*.css'
                    ]
                }
            }
        },

        connect: {
            options: {
                middleware: function ( connect, options, middlewares ) {
                    var rules = [
                        "!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html"
                    ];
                    middlewares.unshift( rewrite( rules ) );
                    return middlewares;
                },
            },
            server: {
                options: {
                    port: 9000,
                    base: 'build'
                }
            }
        },

        watch: {
            scripts: {
                files: ['scripts/*.js', 'css/*.css', 'html/*.html', 'index.html'],
                tasks: ['copy', 'uglify', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['copy', 'uglify', 'cssmin']);
    grunt.registerTask('serve', ['build', 'connect:server:keepalive']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('default', () => {
        console.log('Choose dev/build/serve grunt task');
    });
}