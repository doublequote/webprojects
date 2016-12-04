
var
  gulp = require('gulp-help')(require('gulp')),
	nodemon      = require('gulp-nodemon'),
	livereload   = require('gulp-livereload');

var nodemonServerInit = function() {
        livereload.listen();
        nodemon({
            script: 'frontend-server.js',
            ext: 'js'
        }).on('restart', function(){
            gulp.src('frontend-server.js')
                .pipe(livereload());
        })
};

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['build-html'], function (cb) {
    nodemonServerInit();
});

gulp.task('build-html', function() {
    return gulp.src('templates/*.html')
        .pipe(livereload());
});

gulp.task('watch', function () {
	gulp.watch(['templates/*.html'], ['build-html']);
});
