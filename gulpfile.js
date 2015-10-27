'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');
var del = require('del');

var options = {
  dist: 'www/',
  src: 'src/'
}

gulp.task('clean', function () {
  return del([options.dist + '**/*']);
});

gulp.task('build:bower', () => {
  gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.src));
});

gulp.task('build:js', () => {
  return gulp.src(options.src + '**/*.js', {base:options.src})
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:stul', () => {
  return gulp.src(options.src + '**/*.styl', {base:options.src})
    .pipe(changed(options.dist), {extension: '.css'})
    .pipe(stylus())
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:html', () => {
  return gulp.src(options.src + '**/*.html', {base:options.src})
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build', ['build:bower', 'build:js', 'build:html', 'build:stul']);

gulp.task('default', ['build']);
