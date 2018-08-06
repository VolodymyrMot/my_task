var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task ('sass_compile', function(){
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'normal'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/styles'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/styles/**/*.scss', ['sass_compile'])
});