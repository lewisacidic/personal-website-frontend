import browserSync from 'browser-sync';
import gulp from 'gulp';

let bs = browserSync.create();

gulp.task('serve', () => {
  bs.init({
    browser: ['safari', 'google chrome'],
    server: {
      baseDir: 'src',
      routes: {
        "/src": "src",
        "/jspm_packages": "jspm_packages",
        "/jspm.conf.js": "jspm.conf.js"
      }
    }
  });
  gulp.watch('src/**/*.html').on('change', bs.reload);
  gulp.watch('src/**/*.ts').on('change', bs.reload);
});

gulp.task('default', ['serve']);
