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
          engine: 'gm',
          // sizes: [{
          //   width: 800,
          //   quality: 50,
          //   rename: false
          // }, {
          //   name: 'small',
          //   width: '30%',
          //   // suffix: '_small',
          //   quality: 20
          // }, {
          //   name: 'large',
          //   width: '50%',
          //   // suffix: '_large',
          //   // suffix: '_2x',
          //   quality: 40
          // }]
          sizes: [
            {
              width: 400,
              quality: 50
              // rename: false
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
            // {
            //   width: 1200,
            //   quality: 50,
            // }
            {
              width: 1600,
              quality: 30,
              suffix: '_2x'
            }
          ]
        },
        files: [{
          // expand: true,
          // cwd: 'src/images/',
          // src: ['*.{gif,jpg,png}'],
          // dest: 'build/images/'
          expand: true,
          cwd: 'src/',
          src: ['images/*.{gif,jpg,png}'],
          dest: 'build/'
        }]
      }
    },
    responsive_images_extender: {
      dev: {
        options: {
          ignore: ['.fixed'],
          // baseDir: 'build'
          sizes: [{
            selector: 'figure>img',
            sizeList: [
              {
                // cond: 'max-width: 600px',
                // size: 'calc(100vw - (80px + 4em))'
                cond: 'max-width: 560px',
                // size: '400px'
                // size: 'calc(100vw - (80px + 4em))'
                size: '400px'
              },
              {
                // cond: 'max-width: 900px',
                cond: 'max-width: 760px',
                // size: 'calc(100vw - (80px + 4em))'
                // size: '720px'
                size: '600px'
              },
              {
                cond: 'min-width: 761px',
                // size: '720px'  
                size: '900px'
            }]
          }]
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
      index: {
        src: ['build/index.html']
      }
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
      index: {
        src: ['src/index.html'],
        dest: 'build/index.html'
      }
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-responsive-images-extender');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('images', ['clean:index', 'copy:index', 'responsive_images_extender'])

  grunt.registerTask('default', ['clean:dev', 'mkdir', 'copy:dev', 'responsive_images', 'responsive_images_extender']);

};
