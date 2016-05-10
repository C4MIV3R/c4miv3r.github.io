var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    watch   = require('gulp-watch');

// gulp task for less
gulp.task('sass', function() {
  gulp.src('public/sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/css/'));
});
// compile materialize css
gulp.task('materialize-sass', function() {
  gulp.src('public/sass/materialize.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/css/'));
});

// gulp watch
gulp.task('watch', function(){
  gulp.watch('public/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch','materialize-sass']);
