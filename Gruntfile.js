module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
        jpg: {
        options: {
          optimizationLevel: 5,
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'img/compressed/',
            ext: '.jpg'
          }
        ]
        }
      }

  });

  //load the plugin that provides the 'uglify' task
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //default task(s)
  grunt.registerTask('default', ['imagemin']);
};
