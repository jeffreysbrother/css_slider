module.exports = function(grunt) {


  //additional plugin installed:
  var mozjpeg = require('imagemin-mozjpeg');

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      jpg: {
        options: {
          progressive: true,
          use: [mozjpeg()],
          quality: 10
        },
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/compressed/'
        }]
      }
    }
    
  });

  //load the plugin that provides the 'uglify' task
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //default task(s)
  grunt.registerTask('default', ['imagemin']);
};
