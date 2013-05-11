module.exports = function(grunt) {

  // A very basic default task.
  grunt.registerTask('create-alternatives', '', function() {
    var themes = grunt.file.readJSON('themes-config.json');
    
    var configObj = {
        dist: {
	   files: {
	   }
	}
    };
    
    //grunt.log.write(JSON.stringify(themes));
    for (var name in themes.themes)
    {
       // target
       var themefolder = 'web/' + name + "/";
        grunt.file.recurse('mockups/fronteers', function callback(abspath, rootdir, subdir, filename) { 
           //grunt.log.writeln(abspath +  " " + rootdir + " " + subdir + " " + " " + filename);
           
           
           if (typeof subdir === 'undefined')
               {
                   subdir = "";
               }
           grunt.log.writeln(themefolder + subdir + "/" + filename);
           grunt.file.copy(abspath, themefolder + subdir + "/" + filename);
           return;
       });
        
        
        //grunt.log.writeln(name);
        var cssObject = themes.themes[name];
        var cssString = "";
        for (var rulename in cssObject)
        {
            cssString += "$" + rulename + ": "  + cssObject[rulename] + ";\n";
        }
        grunt.file.write(themefolder + "styles/_variables.scss", cssString);
        configObj.dist.files[themefolder + '/styles/styles.css'] = themefolder + '/styles/styles.scss';

    }
    
    grunt.config('sass', configObj);
    grunt.task.run('sass');
    
  });

};
