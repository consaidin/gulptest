const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', function () {
    return gulp.src('src/img/**/*.{jpg, svg, png}')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('frontend/img'));
});

gulp.task('img:watch', function () {
    gulp.watch('src/img/**/*.*', gulp.parallel('img'));
});