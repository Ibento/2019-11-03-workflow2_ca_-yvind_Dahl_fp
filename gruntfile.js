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
            stylesheets: { 
                // watch for changes in stylesheets and run less and cssmin on change
                files: ['app//*.css', 'app//*.less'], 
                tasks: ['less', 'cssmin'] 
            }, 
            // watch for changes in images directory
            images: { 
                files: 'app/images/*', tasks: ['imagemin'] 
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