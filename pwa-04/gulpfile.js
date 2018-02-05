const gulp = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const runSequence = require('run-sequence');
const wbBuild = require('workbox-build');

// Clean output directory
gulp.task('clean', () => del(['.tmp', 'build/*', '!build/.git'], {dot: true}));

gulp.task('copy', () =>
  gulp.src([
    'src/**/*',
    'node_modules/workbox-sw/build/importScripts/workbox-sw.prod*.js'
  ]).pipe(gulp.dest('build'))
);

gulp.task('bundle-sw', () => {
  return wbBuild.injectManifest({
    swSrc: 'src/service-worker.js',
    swDest: 'build/service-worker.js',
    globDirectory: 'src',
    staticFileGlobs: [
      'index.html',
      'scripts/app.js',
      'styles/inline.css',
      'images/clear.png',
      'images/cloudy-scattered-showers.png',
      'images/cloudy.png',
      'images/fog.png',
      'images/ic_add_white_24px.svg',
      'images/ic_refresh_white_24px.svg',
      'images/partly-cloudy.png',
      'images/rain.png',
      'images/scattered-showers.png',
      'images/sleet.png',
      'images/snow.png',
      'images/thunderstorm.png',
      'images/wind.png',
      'images/notification-flat.png',
      'images/checkmark.png',
      'images/xmark.png'
    ]
  })
  .catch((err) => {
    console.log('[ERROR] This happened: ' + err);
  });
});

gulp.task('default', ['clean'], cb => {
  runSequence(
    'copy',
    'bundle-sw',
    cb
  );
});


gulp.task('serve', ['default'], () => {
  browserSync.init({
    server: 'build',
    port: 8002
  });
  gulp.watch('src/*', ['default']).on('change', browserSync.reload);
});