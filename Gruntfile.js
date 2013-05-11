module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json') ,
    themes: grunt.file.readJSON('themes-config.json')
  });
  
  // Actually load this plugin's task(s).
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadTasks('tasks');
  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
