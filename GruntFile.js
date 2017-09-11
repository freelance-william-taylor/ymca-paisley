
module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
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
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: { spawn: false }
            },
            html: {
                files: ['index.html', 'html/*.html'],
                tasks: ['copy'],
                options: { spawn: false }
            },
            scripts: {
                files: ['ts/**/*.ts'],
                tasks: ['ts', 'browserify', 'uglify'],
                options: { spawn: false }
            }
        },

        ts: {
            default: {
                src: ["ts/**/*.ts", "!node_modules/**"],
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks("grunt-ts");

    let steps = ['copy', 'ts', 'browserify', 'uglify', 'sass', 'cssmin'];
    grunt.registerTask('build', steps);
}
