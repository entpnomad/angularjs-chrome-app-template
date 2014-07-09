angularjs-chrome-app-template
=============================

A Chrome App which uses AngularJS as an MVC Framework.

Includes full Bootstrap SCSS files, a style.scss file and a pre-configured config.rb output.
<br>Includes .jade templates in JADE folder which output to HTML folder.
<br>Includes the following NodeJS modules: Grunt, Jade, Compass & UglifyJS and HTMLmin.
<br>Includes automated compilation/compression tasks.

<b>INSTRUCTIONS:</b>
<br>1. Download the repository
<br>2. In your console, navigate to the app folder. Example:
```shell
cd sites/angularjs-chrome-app-template/
```
<br>3. Run the following commands to install NodeJS modules:
```shell
npm install -g grunt-cli
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-htmlmin --save-dev
npm install grunt-contrib-compass --save-dev
npm install grunt-contrib-jade --save-dev
npm install grunt-contrib-watch --save-dev
```
<br>4. Run Grunt Watch to watch for file modifications and compile/compress files:
```shell
grunt watch
```

<b>TO DO:</b>
<br>1. Include Google Fonts API with a SANS font (3 weights).
