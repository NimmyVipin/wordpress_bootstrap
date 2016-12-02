/**
 * Created by ruby on 12/10/16.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('scripts', function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/owl.carousel/dist/owl.carousel.min.js',
        './source/js/functions.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/'));
});


gulp.task('sass', function () {
    return gulp.src('./source/scss/main.scss')
        .pipe(sass({
            outputStyle:'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});


gulp.task('copy', function() {
    return gulp.src('./node_modules/bootstrap-sass/assets/fonts/**')
        .pipe(gulp.dest('./source/fonts'));
});

gulp.task('watch',function(){
    gulp.watch('./source/javascripts/**/*.js',['scripts'])

});

gulp.task('copyFontAwesome', function(){
    return gulp.src('./node_modules/font-awesome/fonts/**')
        .pipe(gulp.dest('./source/fonts'))
});



gulp.task('default',['scripts','copy','copyFontAwesome']);

