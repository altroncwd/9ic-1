'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: "./_planning/UIDesign/"
  });

  gulp.watch("./_planning/UIDesign/**/*.scss", ['sass']);
  gulp.watch("./_planning/UIDesign/**/*.*").on('change', watchChangeHandler);
});

function watchChangeHandler() {
  browserSync.reload();
  gulp.src('./_planning/UIDesign/style.css')
    .pipe(gulp.dest('./public/'));
};

gulp.task('sass', function () {
  gulp.src('./_planning/UIDesign/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./_planning/UIDesign/'))
    .pipe(browserSync.stream());
});

gulp.task('deploy', function() {
  return gulp.src('./deploy/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['serve']);
