const gulp = require('gulp'),
// sass = require('gulp-sass'),
// sourcemaps = require('gulp-sourcemaps'),
bs = require('browser-sync').create(),
reload = bs.reload;
// concat = require('gulp-concat');


// gulp.task('dev-env', ['sass-dev'], function(){
//     bs.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch("scss/*.scss", ['sass-dev']);
//     gulp.watch("*.html").on('change', bs.reload);
// });


// gulp.task('sass-dev', function() {
// 	return gulp.src('./scss/**/*.scss')
// 	.pipe(sourcemaps.write())
// 	.pipe(sass({
// 		outputStyle:'expanded',
// 		sourceComments: true
// 	}).on('error', sass.logError))
// 	.pipe(sourcemaps.write())
//     .pipe(gulp.dest('./css'))
// 	.pipe(bs.stream());
// });

// gulp.task('sass', function() {
// 	gulp.src('./scss/**/*.scss')
// 	.pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('./css'))
// });

// gulp.task('sass-dev:watch', function(){
// 	gulp.watch('./scss/**/*.scss', ['sass-dev']);
// });


// gulp.task('scripts', function() {
  	// gulp.src(['./plugins/jquery.min.js','./bootstrap/js/bootstrap.min.js','plugins/modernizr.js','./plugins/isotope/isotope.pkgd.min.js','./plugins/jquery.backstretch.min.js','./plugins/jquery.appear.js','js/template.js'])
    // .pipe(concat('all.js'))
    // .pipe(gulp.dest('./public_js/'));
// });


gulp.task('browser-sync', function(){
    bs.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("css/*.css").on("change", reload);
    gulp.watch("*.html").on("change", reload);
});


gulp.task('default', ['dev-env']);