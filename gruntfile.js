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
          'resources/js/app.js': ['development/js/app.js']
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
          cssDir: 'resources/css'
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
    },
    watch: {
      js: {
        files: ['development/js/*.js'],
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      },
      jade: {
        files: ['development/jade/*.jade', 'development/jade/**/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['development/html/*.html'],
        tasks: ['htmlmin'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['development/scss/*.{scss,sass}'],
        tasks: ['compass'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jade', 'compass', 'uglify', 'htmlmin', 'watch']);

};