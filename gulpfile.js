import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import {src, dest, watch} from 'gulp';

const sass = gulpSass(dartSass);

export function css (cb){
    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'))

    cb()
}

export function js (cb){
    src('src/javascript/**/*.js')
    .pipe(plumber())
    .pipe(dest('build/js'))

    cb()
}

export function dev(cb){
    watch('src/scss/**/*.scss',css)
    watch('src/javascript/**/*.js',js)
    cb()
}