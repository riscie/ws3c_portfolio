/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cac del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    htmlreplace = require('gulp-html-replace');

gulp.task('sass', function () {
  return sass('sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('public/css'));
});

// html
gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
        'css':['css/materialize.css', 'css/materialize.min.css'],
        //'js': ['lib/jquery/jquery.min.js', 'lib/bootstrap/js/bootstrap.min.js', 'lib/chart.js/Chart.min.js', 'lib/vue/vue.min.js','js/bundle.min.js']
    }))
    .pipe(gulp.dest('public/'));
});

// js
gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('bundle.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

// lib
gulp.task('lib', function() {
    gulp.src('node_modules/bootstrap/dist/**')
        .pipe(gulp.dest('public/lib/bootstrap/'))

    gulp.src('node_modules/chart.js/Chart.min.js')
        .pipe(gulp.dest('public/lib/chart.js/'))

    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('public/lib/jquery/'))

    gulp.src('node_modules/vue/dist/vue.min.js')
        .pipe(gulp.dest('public/lib/vue/'))
});


// clean
gulp.task('clean', function(cb) {
    del(['public/css/*/**', 'public/js/*/**', 'public/lib/*/**'], cb)
});


// default
gulp.task('default', function() {
  gulp.start('html', 'sass');
});




// // Watch
// gulp.task('watch', function() {
//
//   // Watch .css files
//   //gulp.watch('src/css/**/*.css', ['styles']);
//
//   // Watch .js files
//   gulp.watch('src/js/**/*.js', ['scripts']);
//
//   // Watch image files
//   gulp.watch('src/img/**/*', ['images']);
//
//   // Create LiveReload server
//   livereload.listen();
//
//   // Watch any files in dist/, reload on change
//   gulp.watch(['dist/**']).on('change', livereload.changed);
//
// });
