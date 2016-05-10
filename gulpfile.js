var gulp    = require('gulp'),
    less    = require('gulp-less'),
    watch   = require('gulp-watch');

// gulp task for less
gulp.task('less', function() {
  gulp.src('./public/less/style.less')
  .pipe(less())
  .pipe(gulp.dest('./public/styles/'));
});

// gulp watch
gulp.task('watch', function(){
  gulp.watch('public/less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);
