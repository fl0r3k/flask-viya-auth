/* Gulpfile.js */
var gulp = require('gulp'); // 1
var browserify = require('browserify'); //2
var babelify = require('babelify'); //3
var source = require('vinyl-source-stream'); //4

var basedir = 'app/static/cas/scripts/jsx/';
var paths = [ '.' ];

gulp.task('js', function() {
  //Browserify bundles the JS.
  return browserify( 'main.jsx', { basedir: basedir, paths: paths} )
    .transform( babelify, {presets: ["@babel/preset-env", "@babel/preset-react"]} ) //———–> transpiles es6 to es5
    .bundle()
    .on('error', (err) => {
      console.log('JS Error', err);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('app/static/cas/scripts/js'));
});
