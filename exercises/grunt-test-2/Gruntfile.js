module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      src: ['docs/assets/images/*.jpg'],
    },
    // copy: {
    //   dev: {
    //     files: [{
    //       expand: true,
    //       cwd: 'src/images/',
    //       src: ['*.{gif,jpg,png}'],
    //       dest: 'docs/assets/images/'
    //     }]
    //   }
    // },
    responsive_images: {
      dev: {
        options: {
          sizes: [
            {
              width: 800,
              quality: 85,
              rename: false
            },
            {
              name: 'small',
              width: 570,
              quality: 85
            }
          ]
        },
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['*.{jpg,png}'],
          dest: 'docs/assets/images/'
          // custom_dest: 'docs/assets/images/{%= name %}'
        }]
      }
    },
    
    watch: {
      dev: {
        // files: ['<%= responsive_images.files'],
        files: ['src/images/*.{jpg,png'],
        tasks: ['responsive_images']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('all', ['clean', 'responsive_images']);
  
  // grunt.registerTask('default', ['copy', 'responsive_images']);
  grunt.registerTask('default', ['responsive_images', 'watch']);
};