angularjs-chrome-app-template
=============================

A Chrome App which uses AngularJS as an MVC Framework.

Includes full Bootstrap SCSS files, a style.scss file and a pre-configured config.rb output.
<br>Includes .jade templates in JADE folder which output to HTML folder.
<br>Includes the following NodeJS modules: Grunt, Jade, Compass, UglifyJS, HTMLmin and Watch.
<br>Includes automated compilation/compression tasks.

<h2>INSTRUCTIONS:</h2>
<p>1. Install NodeJS and NPM
<br>2. Download the repository and navigate to the app folder
<br>3. Run the following commands to install NodeJS modules:
</p>
```shell
npm install -g grunt-cli
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-htmlmin --save-dev
npm install grunt-contrib-compass --save-dev
npm install grunt-contrib-jade --save-dev
npm install grunt-contrib-watch --save-dev
```
<br>4. Run Grunt to watch for file modifications and compile/compress files:
```shell
grunt
```
<br>5. Start developing!

<b>TO DO:</b>
<br>1. Include Google Fonts API with a SANS font (3 weights).
