var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', ['serve']);

gulp.task('serve', function() {
    browserSync.init({
      server: '.',
      port: 3000
    });
    gulp.watch('styles/*.css').on('change', browserSync.reload);
    gulp.watch('scripts/*.js').on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
});