const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngQuant = require('pngquant');

gulp.task('img-copy', function () {
    return gulp.src('src/img/**/*.{jpg,png}')
        .pipe(gulp.dest('frontend/img'));
});

gulp.task('img', function () {
    return gulp.src('frontend/img/**/*.{jpg,svg,png}')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imageminJpegRecompress({
                loops: 5,
                min: 65,
                max: 70,
                quality: 'medium'
            }),
            imagemin.optipng({optimizationLevel: 3}),
            pngQuant({quality: '65-70', speed: 5}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('frontend/img'))
});

gulp.task('img:watch', function () {
    gulp.watch('src/img/**/*.*', gulp.parallel('img-copy'));
});