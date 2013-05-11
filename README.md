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

## Themes

{
  "themes":[
    {
      "theme1":{
        "color-base": "#f2bb00", //yellow
        "color-contrast": "#009de0", //blue
        "color-link": "#00a0d2", //blue-link
        "color-font-dark": "#363636", //gray-dark-font
        "color-bg": "rgba(255,255,255,.9)", //gray
        "color-bg-light": "#ffffff", //white
        "color-bg-dark": "#333333",  //gray-dark menu

        "font-main": "Verdana, sans-serif",
        "font-headings": "Verdana, sans-serif",
        "font-menu": "Consolas, Menlo, Monaco, 'Courier New', monospace"
      },

      "theme2":{
        "color-base": "#084299", //blue-dark
        "color-contrast": "#089952", //green
        "color-link": "#086fa3", //blue
        "color-font-dark": "#363636", //gray-dark-font
        "color-bg": "rgba(#00828c,.2)", //light-green
        "color-bg-light": "#ffffff", //white
        "color-bg-dark": "#00828c",  //gray-dark menu

        "font-main": "Milonga, cursive",
        "font-headings": "'Days One', sans-serif",
        "font-menu": "Consolas, Menlo, Monaco, 'Courier New', monospace"
      },

      "theme3":{
        "color-base": "#0a7aa6", //blue
        "color-contrast": "#f23005", //red
        "color-link": "#ff8900", //orange
        "color-font-dark": "#363636", //gray-dark-font
        "color-bg": "rgba(#ffbe73,.5)", //skin
        "color-bg-light": "#ffffff", //white
        "color-bg-dark": "#ffb800",  //gray-dark

        "font-main": "'Swanky and Moo Moo'",
        "font-headings": "'Faster One'",
        "font-menu": "Iceland, cursive"
      },

      "theme4":{
        "color-base": "#ed6e6c", //pink
        "color-contrast": "#5ba660", //green
        "color-link": "#567a78", //blue
        "color-font-dark": "darken('$color-link',10%)", //blue
        "color-bg": "rgba(#97ad62,.2)", //green
        "color-bg-light": "rgba(#ed6e6c,.1) //whitish pink
        "color-bg-dark": "#a33a51",  //pink-dark

        "font-main": "Iceland",
        "font-headings": "'Just Me Again Down Here'",
        "font-menu": "Arial, Helvetica, sans-serif"
      },

      "theme5":{
        "color-base": "#424143", //dark gray
        "color-contrast": "#cbc9cf", //light gray
        "color-link": "#ffffff", //white
        "color-font-dark": "#cbc9cf", //light gray font
        "color-bg": "rgba(#67666a,.8)", //
        "color-bg-light": "#1e1e1f", //white
        "color-bg-dark": "rgba(#67666a,.4)",  //gray-dark

        "font-main": "'Courier New'",
        "font-headings": "'Abril Fatface'",
        "font-menu": "'Courier New'"
      }
    }
  ]
}

