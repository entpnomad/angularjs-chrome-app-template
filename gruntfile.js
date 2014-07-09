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
          'js/app.js': ['development/js/app.js']
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
              cwd: "development/jade",
              src: "**/*.jade",
              dest: "development/html",
              expand: true,
              ext: ".html"
            } ]
        }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          sassDir: 'development/scss',
          cssDir: 'css'
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'views/index.html':   'development/html/index.html'     // 'destination': 'source'
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