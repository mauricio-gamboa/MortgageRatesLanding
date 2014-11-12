module.exports = function(grunt) {

  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["public/styles"]
        },
        files: {
          "public/styles/styles.css": "public/less/styles.less"
        }
      },
      production: {
        options: {
          paths: ["public/styles"],
          cleancss: true
        },
        files: {
          "public/styles/styles.css": "public/less/styles.less"
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'],
        dest: 'public/js/libs.js'
      }
    },

    uglify: {
      js: {
        files: {
          'public/js/libs.js': 'public/js/libs.js'
        }
      }
    },

    watch: {
      styles: {
        files: ['public/less/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};