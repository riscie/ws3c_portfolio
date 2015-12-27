/*!
 * gulp
 * npm install
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    htmlreplace = require('gulp-html-replace');


// sass
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// html
gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(htmlreplace({
        'css':['css/portfolio.css'],
        'js': ['js/jquery-2.1.1.js', 'js/materialize.min.js', 'js/jquery.waypoints.js', 'js/portfolio.js']
    }))
    .pipe(gulp.dest('public/'));
});


// js
gulp.task('js', function() {
  return gulp.src('js/*.js')
//    .pipe(concat('bundle.js'))
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

// images (not in the default - takes too damn long)
gulp.task('img', function() {
  return gulp.src('img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/img'))
});

// clean
gulp.task('clean', function(cb) {
    del(['public'], cb)
});


// default
gulp.task('default', function() {
  gulp.start('html', 'sass', 'js', 'img');
});




// Watch
gulp.task('watch', function() {

    // Watch image files
    gulp.watch('./*.html', ['html']);

    //Watch .sass files
    gulp.watch('sass/**/*.scss', ['sass']);

    // Watch .js files
    gulp.watch('js/**/*.js', ['js']);

    // Watch image files
    gulp.watch('img/**/*', ['img']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in public/, reload on change
    gulp.watch(['public/**']).on('change', livereload.changed);

});
