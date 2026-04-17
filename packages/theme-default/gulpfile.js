'use strict';
var gulp = require('gulp'), //gulp基础库
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    del = require('del');


var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
});

function clean(cb) {
    const deletedPaths = del.sync(['./lib/*']);
    console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
    cb();
}

//less处理
function minifyless() {
    gulp.src('./src/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./lib'))
};

//font处理
function minifyfonts() {
    gulp.src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/fonts'))
};

function build(cb) {
    minifyless();
    minifyfonts();
    cb();
}

function watch() { //监听文件，文件改变执行对应的任务
    gulp.watch('./src/common/*.less', build)
    gulp.watch('./src/transiton/*.less', build)
    gulp.watch('./src/*.less', build)
}

exports.clean = clean;
exports.watch = watch;
exports.default = gulp.series(clean, build, watch);
