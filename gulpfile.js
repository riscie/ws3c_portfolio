/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cac del --save-dev
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

gulp.task('sass', function () {
  return sass('sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css'));
});

// html
gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
        'css':['css/materialize.min.css', 'css/portfolio.min.css'],
        'js': ['js/jquery-2.1.1.js', 'js/materialize.min.js', 'js/portfolio.js']
    }))
    .pipe(gulp.dest('public/'));
});

// css
gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(rename({ suffix: '.min' }))
//    .pipe(minifycss())
    .pipe(gulp.dest('public/css/'))
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
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('public/img'))
});

// clean
gulp.task('clean', function(cb) {
    del(['public'], cb)
});


// default
gulp.task('default', function() {
  gulp.start('html', 'sass', 'css', 'js', 'img');
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
