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
          sizes: [
            {
              name: 'large',
              width: 1600,
              quality: 30,
              suffix: '_2x'
            },
            {
              name: 'large',
              width: 800,
              quality: 40,
              suffix: '_1x'
            },
            {
              name: 'medium',
              width: 1000,
              quality: 40
            },
            {
              name: 'small',
              width: 400,
              quality: 50
            }
          ]
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['images/*.{gif,jpg,png}'],
          dest: 'build/'
        }]
      }
    },
    // responsive_images_extender: {
    //   dev: {
    //     options: {
    //       ignore: ['.fixed'],
    //       sizes: [{
    //         selector: 'figure>img',
    //         sizeList: [
    //           {
    //             cond: 'max-width: 560px',
    //             size: '400px'
    //           },
    //           {
    //             cond: 'max-width: 760px',
    //             size: '600px'
    //           },
    //           {
    //             cond: 'min-width: 761px',
    //             size: '900px'
    //         }]
    //       }]
    //     },
    //     files: [{
    //       src: ['build/index.html'],
    //       dest: 'build/index.html'
    //     }]
    //   }
    // },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['build/'],
      },
      code: {
        src: ['build/index.html', 'build/css']
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
          src: [
            'images/fixed/*.{gif,jpg,png}',
            'images/*.svg',
            'css/*',
            'index.html'
          ],
          dest: 'build/'
        }]
      },
      code: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            'css/*',
            'index.html'
          ],
          dest: 'build/'
        }]
      }
    },
    watch: {
      code: {
        files: ['src/index.html', 'src/css/*'],
        tasks: ['code']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-responsive-images-extender');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-watch');  

  grunt.registerTask('code', ['clean:code', 'copy:code', 'watch']);

  grunt.registerTask('default', ['clean:dev', 'mkdir', 'copy:dev', 'responsive_images']);
  
};
