module.exports = function(grunt) {

    // configure Grunt
    grunt.initConfig({

        // get configuration from package.json
        pkg: grunt.file.readJSON('package.json'),

        // config goes here

        // config less task
        less: {
            build: {
                files: {
                    'app/css/styles.css': 'app/less/styles.less'
                }
            }
        },
        // config cssmin
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'app/css',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css',
                ext: '.min.css'
              }]
            }
        },

        imagemin: {      
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'app/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dist/images/'
                }]
            }
    
        },

        // config watch
        watch: {
            options: {
              livereload: true,
            },
            html: {
                files: '{./dist/*.html}'
            },
            less: {
                files: '{./app/less/*.less}',
                tasks: ['less', 'cssmin']
 

            },
            images: {
                files: '{./app/images/*.*}',
                tasks: ['imagemin']

            },

            gruntchanges: {
                files: './gruntfile.js'
            }
        }

    });

    grunt.registerTask('default', ['imagemin','less', 'cssmin', 'watch']); 

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');




}