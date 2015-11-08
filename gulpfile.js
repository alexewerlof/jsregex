'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var mainBowerFiles = require('gulp-main-bower-files');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');
var del = require('del');
const babel = require('gulp-babel');

var options = {
  dist: 'www/',
  src: 'src/'
}

gulp.task('clean', function () {
  return del([options.dist + '**/*'], {force:true});
});

gulp.task('build:bower', () => {
  gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.dist + '/bower'));
});

gulp.task('build:js', () => {
  return gulp.src(options.src + '/js/**/*.js', {base:options.src})
    .pipe(changed(options.dist))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:css', () => {
  return gulp.src(options.src + '**/*.styl', {base:options.src})
    .pipe(changed(options.dist), {extension: '.css'})
    .pipe(stylus({'include css': true}))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:html', () => {
  return gulp.src(options.src + '**/*.html', {base:options.src})
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build:img', () => {
  return gulp.src(options.src + 'img/**/*', {base:options.src})
    .pipe(changed(options.dist))
    .pipe(gulp.dest(options.dist));
});

gulp.task('build', ['build:bower', 'build:js', 'build:html', 'build:css', 'build:img']);

gulp.task('default', ['build']);
