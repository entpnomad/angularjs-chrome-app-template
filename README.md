angularjs-chrome-app-template
=============================

A Chrome App which uses AngularJS as an MVC Framework. Includes full Bootstrap SCSS files and Roboto Font from Google Font API.

Includes a demo style.scss file and index.jade file as templates. SCSS files will compile as CSS stylesheets and JADE files will compile as compressed HTML files.

Includes the following NodeJS modules: Grunt, Jade, Compass, UglifyJS, HTMLmin and Watch. Automated compilation/compression tasks have been created.

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