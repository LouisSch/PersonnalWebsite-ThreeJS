const gulp = require('gulp');
const path = require('path');
const nodemon = require('nodemon');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const cleaner = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

gulp.task('watcher', () => {
    nodemon('server.js');
    
    gulp.watch(path.join(__dirname + '/public/resources/style/*.scss'), () => {
        return gulp.src(path.join(__dirname + '/public/resources/style/*.scss'))
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(sourcemaps.write('main_srcmap'))
            .pipe(gulp.dest(path.join(__dirname + '/public/resources/dist/style/')));
    });

    gulp.watch(path.join(__dirname + '/public/resources/scripts/Kernel.ts'), () => {
        return new Promise((resolve, reject) => {
            webpack(webpackConfig, (err, stats) => {
                if (err) {
                    return reject(err);
                }
    
                if (stats.hasErrors()) {
                    return reject(new Error(stats.compilation.errors.join('\n')));
                }
    
                resolve();
            });
        });
    });
});