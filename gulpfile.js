var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
let minifyCSS = require('gulp-csso');

gulp.task('html', function() {
    return gulp.src('src/html/*.html')
        .pipe(gulp.dest('docs'));
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('docs/css'));
});

gulp.task('images', function() {
    return gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task("js", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("docs"));
});

gulp.task('default', ['html', 'images', 'css', 'js']);
