module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      // files: ['Gruntfile.js', 'src/**/*.js'],
      files: ['Gruntfile.js', 'src/js/main.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
        },
        esversion: 6
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    clean: {
      src: ['dist/**'],
    },
    responsive_images: {
      dev: {
        options: {
          sizes: [
            {
              width: 400,
              quality: 50,
            },
            {
              width: 600,
              quality: 60
            },
            {
              width: 900,
              quality: 40,
              rename: false
            },
            {
              width: 1600,
              quality: 30,
              suffix: '_2x'
            }
          ]
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['images/*.{jpg,png}'],
          dest: 'dist/'
        }]
      }
    },
    // responsive_images_extender: {},
    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      images: {
        files: ['<%= responsive_images.files'],
        // tasks: ['responsive_images', 'responsive_images_extender']
        tasks: ['responsive_images']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-responsive-images-extender');

  // grunt.registerTask('images', ['clean', 'responsive_images', 'responsive_images_extender']);
  grunt.registerTask('images', ['clean', 'responsive_images']);

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);
};