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

        var pages = [];
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
                cssString += "$" + rulename + ": " + cssObject[rulename] + ";\n";
            }
            grunt.file.write(themefolder + "styles/_variables.scss", cssString);
            configObj.dist.files[themefolder + '/styles/styles.css'] = themefolder + '/styles/styles.scss';
            pages.push(name + '/pages/hackaton.html');
        }
        
        var viewsJS = 'var views = ' + JSON.stringify(pages) + ';';
        grunt.file.write('web/views.js', viewsJS);
     
		grunt.config('sass', configObj);
		grunt.task.run('sass');

        /** This is nice phantomjs stuff that does not work yet */
        /*
    
    var url ='http://www,google.com';
        // Create the PhantomJS proxy
    var phantomProxy = require('phantom-proxy').create({}, function(proxy){
                console.log('taking webshot of ' + url);

                var page = proxy.page,
                        phantom = proxy.phantom,
                        pageSelector = 'body',
                        timeout = 1000;
        // Open the page url
        page.open(url, function () {
            page.paperSize = {
              format: 'A4', 
              orientation: "landscape"
            };

            page.viewportSize = {width: 1280, height: 1024};
            page.render('google.pdf'); 
        });
        


      });        */
    });

};
