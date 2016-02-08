/* Load Gulp with Plugins */
var gulp        = require('gulp'),
    browsersync = require('browser-sync').create();


/* Create default-task and watcher */
gulp.task('default', function () {

    browsersync.init({
        server: { baseDir: "./" },
        port: 5000,
        notify: false,
        ghostMode: false,
        browser: "google chrome"
    });

    gulp.watch(['./app/**/*', './css/**/*.css', './index.html']).on('change', function () {
        browsersync.reload();
    });

});
