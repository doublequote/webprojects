
var
  gulp = require('gulp-help')(require('gulp')),
	nodemon      = require('gulp-nodemon'),
	livereload   = require('gulp-livereload');

var nodemonServerInit = function() {
        livereload.listen();
        nodemon({
            script: 'server/frontend-server.js',
            ext: 'js'
        }).on('restart', function(){
            gulp.src('server/frontend-server.js')
                .pipe(livereload());
        })
};

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['build-html'], function (cb) {
    nodemonServerInit();
});

gulp.task('build-html', function() {
    return gulp.src('server/templates/*.html')
        .pipe(livereload());
});

gulp.task('watch', function () {
	gulp.watch(['server/templates/*.html'], ['build-html']);
});

gulp.task('copy-skin', function() {
  gulp.src('skin/semantic/dist/**').pipe(gulp.dest('resources/semantic/'));
  gulp.src('skin/*.css').pipe(gulp.dest('resources/'));
})

gulp.task('copy-components', function() {
  gulp.src('components/**').pipe(gulp.dest('resources/components/'));
})

gulp.task('copy-libs', function() {
  gulp.src('node_modules/@angular/**').pipe(gulp.dest('resources/@angular/'));
  gulp.src('node_modules/jquery/dist/**').pipe(gulp.dest('resources/jquery/'));
  gulp.src('node_modules/rxjs/bundles/**').pipe(gulp.dest('resources/rxjs/'));
  gulp.src('node_modules/systemjs/dist/**').pipe(gulp.dest('resources/systemjs/'));
  gulp.src('node_modules/zone.js/dist/**').pipe(gulp.dest('resources/zone.js/'));
  gulp.src('node_modules/reflect-metadata/**').pipe(gulp.dest('resources/reflect-metadata/'));
  gulp.src('node_modules/semantic-ui-calendar/dist/**').pipe(gulp.dest('resources/semantic-ui-calendar/'));
})
