const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');

gulp.task('default', function () {
    runSequence(
        'build',
        [
            'sass:watch',
            'pug:watch',
            'js:watch',
            'fonts:watch',
            'img:watch',
            'server',
        ],
    );
});