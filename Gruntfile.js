module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/script.js',
        dest: 'script.min.js'
      }
    }

  });

  //load the plugin that provides the 'uglify' task
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //default task(s)
  grunt.registerTask('default', ['uglify']);
};
