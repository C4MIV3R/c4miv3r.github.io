var gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    less    = require('gulp-less');

// gulp task for less
gulp.task('less', function() {
  return gulp.src('public/less/style.css')
  .pipe(less())
  .pipe(gulp.dest('public/styles/stylesheet.css'));
});

// gulp watch
gulp.task('watch', function(){
  gulp.watch('public/less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);
