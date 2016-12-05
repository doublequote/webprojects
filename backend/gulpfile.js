
var
  gulp = (require('gulp')),
	nodemon      = require('gulp-nodemon'),
	livereload   = require('gulp-livereload');

var nodemonServerInit = function() {
        livereload.listen();
        nodemon({
            script: 'server/backend-server.js',
            ext: 'js'
        }).on('restart', function(){
            gulp.src('server/backend-server.js')
                .pipe(livereload());
        })
};

gulp.task('default', ['build', 'watch']);

gulp.task('build', [], function (cb) {
    nodemonServerInit();
});

gulp.task('watch', function () {
	gulp.watch(['server/templates/*.html'], ['build-html']);
});
