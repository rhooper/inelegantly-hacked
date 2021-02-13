import gulp from "gulp";

import autoprefixer from "gulp-autoprefixer";
import babel from "gulp-babel";
import cache from "gulp-cache";
import concat from "gulp-concat";
import imagemin from "gulp-imagemin";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import sass from "gulp-sass";
import uglify from "gulp-uglify";

gulp.task("images", async function () {
  gulp
    .src("src/images/**/*")
    .pipe(
      cache(
        imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
        })
      )
    )
    .pipe(gulp.dest("static/images/"));

  return true;
});

gulp.task("styles", async function () {
  gulp
    .src(["src/css/**/*.scss"])
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        },
      })
    )
    .pipe(sass())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("static/css/"));

  return true;
});

gulp.task("scripts", async function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        },
      })
    )
    .pipe(concat("main.js"))
    .pipe(babel())
    .pipe(gulp.dest("static/js/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest("static/js/"));

  return true;
});

gulp.task(
  "default",
  gulp.parallel(["images", "scripts", "styles"], function (done) {
    console.log("Done");
    done();
  })
);

// function () {
//   gulp.watch("src/css/**/*.scss", ["styles"]);
//   gulp.watch("src/js/**/*.js", ["scripts"]);
//   gulp.watch("src/images/**/*", ["images"]);
// }
