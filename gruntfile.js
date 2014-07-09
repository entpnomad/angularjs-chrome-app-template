module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/app.min.js': ['js/app.js']
        }
      }
    },
    jade: {
        compile: {
            options: {
                client: false,
                pretty: true
            },
            files: [ {
              cwd: "jade",
              src: "**/*.jade",
              dest: "html",
              expand: true,
              ext: ".html"
            } ]
        }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          sassDir: 'scss',
          cssDir: 'css'
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'views/index.html':   'html/index.html'     // 'destination': 'source'
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['jade', 'compass', 'uglify', 'htmlmin']);

};