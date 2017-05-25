var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('less', function() {
  return gulp.src(['./less/**/*.less'])
  .pipe(less())
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'http://127.0.0.1:8080',
  })
})

gulp.task('watch', ['browserSync', 'less'], function() {
  gulp.watch('./less/*.less', ['less', browserSync.reload]);
  gulp.watch('./**/*.css', browserSync.reload);
  gulp.watch('./**/**/*.php', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});
