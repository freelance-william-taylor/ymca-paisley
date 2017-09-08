
module.exports = function (grunt) {
    let buildSteps = ['copy', 'ts', 'browserify', 'uglify', 'sass', 'cssmin'];

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, dest: 'build/fonts/', src: 'node_modules/font-awesome/fonts/*.*' },
                    { expand: true, dest: 'build/', src: 'images/*.*' },
                    { expand: true, dest: 'build/', src: 'html/*.html' },
                    { expand: true, dest: 'build/', src: 'video/*.mp4' },
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
                    'build/app.min.js': [ 'build/app.js' ]
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
                    middleware: function (connect, options, middlewares) {
                        var modRewrite = require('connect-modrewrite');
                        middlewares.unshift(modRewrite(['!\\.html|\\.mp4|\\.js|\\.svg|\\.jpg|\\.css|\\.png$ /index.html [L]']));

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
                files: ['ts/*.ts', 'sass/*.scss', 'html/*.html', 'index.html'],
                tasks: buildSteps,
                options: {
                    spawn: false
                }
            }
        },

        ts: {
            default: {
                src: ["ts/*.ts", "!node_modules/**"],
                tsconfig: 'tsconfig.json'
            }
        },

        browserify: {
            dist: {
              files: {
                'build/app.js': [ 
                    'ts/*.js' 
                ]
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
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask('build', buildSteps);
    grunt.registerTask('serve', ['connect:server:keepalive']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('default', () => {
        console.log('Choose dev/build/serve grunt task');
    });
}