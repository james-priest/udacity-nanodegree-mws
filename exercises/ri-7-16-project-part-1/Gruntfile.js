/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          // engine: 'im',
          engine: 'gm',
          sizes: [{
            name: 'small',
            width: '30%',
            // suffix: '_small',
            quality: 20
          }, {
            name: 'large',
            width: '50%',
            // suffix: '_large',
            // suffix: '_2x',
            quality: 40
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/images/',
          dest: 'build/images/'
        }]
      }
    },
    responsive_images_extender: {
      dev: {
        options: {
          ignore: ['.fixed'],
          // baseDir: 'build'
        },
        files: [{
          // expand: true,
          // src: ['src/index.html'],
          src: ['build/index.html'],
          // cwd: 'build/',
          dest: 'build/index.html'
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        // src: ['build/images'],
        src: ['build/'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['build/images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: 'src/',
          // src: 'images_src/fixed/*.{gif,jpg,png}',
          src: [
            'images/fixed/*.{gif,jpg,png}',
            'css/*',
            'index.html'
          ],
          dest: 'build/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-responsive-images-extender');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'responsive_images_extender']);

};
