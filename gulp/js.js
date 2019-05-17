const gulp = require('gulp');

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('frontend/js'));
});

gulp.task('js:watch', function () {
    gulp.watch('src/js/**/*.js', gulp.parallel('js'));
});