const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');

gulp.task('build', function (cb) {
    runSequence( 'clean', 'sass', 'pug', 'js', 'js:libs', 'fonts', 'img-copy', 'img', 'svg', cb);
});