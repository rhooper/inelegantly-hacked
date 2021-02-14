const gulp = require('gulp');
const webpack = require('webpack-stream');
const named = require('vinyl-named');

gulp.task('build-js', function () {
  return gulp.src('./src/js/*.js')
    .pipe(named())
    .pipe(webpack())
    .pipe(gulp.dest('static/js/'));
});