const gulp = require('gulp');
const webpack = require('webpack-stream');
const named = require('vinyl-named');

const js = gulp.task('js', function async () {
  return gulp.src('./src/js/**/*.js')
    .pipe(named())
    .pipe(webpack({
      mode: 'production',
      devtool: "sourcemap",
    }))
    .pipe(gulp.dest('static/js/'));
});

// const css = task('css', function(){
// return gulp.src('source/less/*.less')
//     .pipe(less())
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('build/css'))
// });

gulp.task('watch', function() {
  gulp.watch('./src/js/**/*.js', gulp.series('js'))
});
