const gulp = require('gulp');

gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('frontend/fonts'));
});

gulp.task('fonts:watch', function () {
    gulp.watch('src/fonts/**/*.*', gulp.parallel('fonts'));
});