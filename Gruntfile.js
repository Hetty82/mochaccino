module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json') ,

	sass: {
		dist: {
			files: {
				'mockups/fronteers/styles/styles.css': 'mockups/fronteers/styles/styles.scss'
			}
		}
	}
  });
  
  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};