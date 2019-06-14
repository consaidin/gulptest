const gulp = require('gulp');

gulp.task('js', function () {
    return gulp.src('src/js/main.js')
        .pipe(gulp.dest('frontend/js'));
});

gulp.task('js:libs', function () {
    return gulp.src('src/js/libs/**/*.js')
        .pipe(gulp.dest('frontend/js/libs'));
});

gulp.task('js:watch', function () {
    gulp.watch('src/js/**/*.js', gulp.parallel('js'));
});


