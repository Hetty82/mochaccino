# MOCHACCINO


## Mockup source

For each mockup you should create a directory in the mockups directory:

* Put all __HTML files you want to create variations of in a "__pages__" directory.
* Put all SCSS files in a "__styles__" directory.
* All other files you can put in your own directory structure.
* Finally define all your variable fonts & color palets in __config.json__.

Example:


	mockups/
		my-first-mockup/						
		
			config.json
			
			pages/
				index.html
				another.html
				
			styles/
				_variables.scss
				mockup.scss
				
			scripts/
			images/
			another-dir/
			
			
## Mockup output

	web/
		my-first-mockup/	
			
			index.html
			another.html
				
			styles/
				mockup.css
				
			scripts/
			images/
			another-dir/