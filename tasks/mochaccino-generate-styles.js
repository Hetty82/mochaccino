module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('mochaccino-generate-styles', 'Mochaccino: Generating styles', function() {
	grunt.log.write('compiling mockups/fronteers/styles/styles.scss');
	grunt.task.run('sass');
  });

};