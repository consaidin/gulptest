const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');

gulp.task('build', function (cb) {
    runSequence( 'sass', 'pug', 'js', 'fonts', 'img', 'svg', cb);
});