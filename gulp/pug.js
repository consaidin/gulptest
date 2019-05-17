const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src("src/pug/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("frontend/"))
});

gulp.task('pug:watch', function () {
    gulp.watch('./src/pug/**/*.pug', gulp.parallel('pug'));
});