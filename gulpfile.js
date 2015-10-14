var
    gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    inject = require('gulp-inject'),
    runSequence = require('run-sequence');

// constants

var
    webRoot = './www/',
    template = webRoot + 'common/index.html',
    mainFile = webRoot + 'index.html';

gulp.task('copy', function () {
    return gulp.src(template)
        .pipe(gulp.dest(webRoot));
});

gulp.task('wiredep', function () {
    return gulp.src(mainFile)
        .pipe(wiredep())
        .pipe(gulp.dest(webRoot));
});

gulp.task('inject', function () {
    var target = gulp.src(mainFile);
    var sources = gulp.src([webRoot + '**/*.js', webRoot + '**/*.css', '!' + webRoot + 'lib/**/*'], {read: false});

    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest(webRoot));
});

// will be changed once gulp 4 comes out
gulp.task('build', function () {
    runSequence('copy', 'wiredep', 'inject');
});