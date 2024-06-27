
const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');

// Плагины
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const shorthand = require('gulp-shorthand');
const gcmq = require('gulp-group-css-media-queries');
const sassGlob = require('gulp-sass-glob');
const babel = require('gulp-babel');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const webpHtml = require('gulp-webp-html');
const webpCss = require('gulp-webp-css');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const gulpIf = require('gulp-if');

// Проверка для production
const isProd = process.argv.includes("--production");
isDev = !isProd;


// Обработка HTML
const html = () => {
    return src("./src/*.html")
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(htmlmin({ collapseWhitespace: isProd }))
    .pipe(dest("./dist"))
    .pipe(browserSync.stream());
}

// Обработка IMG
const img = () => {
    return src("./src/img/**/*")
    .pipe(newer('./dist/img'))
    .pipe(webp())
    .pipe(dest("./dist/img"))
    .pipe(src("./src/img/**/*"))
    .pipe(newer('./dist/img'))
    .pipe(gulpIf(isProd, imagemin({verbose: true})))
    .pipe(dest("./dist/img"))
    .pipe(browserSync.stream());
}

// Сборка JS
const js = () => {
    return src("./src/js/*.js", {sourcemaps: isDev} )
    .pipe(babel({ presets: ['@babel/env']  }))
    .pipe(webpack({mode: isProd ? 'production' : 'development',
                    output: {
                        filename: 'script.js'
                    }}))
    .pipe(dest("./dist/js", {sourcemaps: isDev} ))
    .pipe(browserSync.stream());
}

// Сборка SCSS
const scss = () => {
    return src("./src/sass/**/*.+(scss|sass)", {sourcemaps: isDev})
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gcmq())
    .pipe(dest("./dist/css", {sourcemaps: isDev}))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(dest("./dist/css", {sourcemaps: isDev}))
    .pipe(browserSync.stream());
}

// обработка icons
const icons = () => {
    return src("./src/icons/**/*")
    .pipe(dest("./dist/icons"))
    .pipe(browserSync.stream());
};


// Обработка Fonts
const font = () => {
    return src("./src/fonts/*")
    .pipe(newer('./dist/fonts'))
    .pipe(fonter({formats: ["ttf", "woff", "eot", "svg"]}))
    .pipe(dest("./dist/fonts"))
    .pipe(gulpIf(isProd,ttf2woff2()))
    .pipe(dest("./dist/fonts"))
    .pipe(browserSync.stream());
}

// Удаление директорий
const clear = () => {
    return del('./dist');
}


// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
}

// Наблюдение
const watcher = () => {
    watch("./src/*.html", html);
    watch("./src/sass/**/*.+(scss|sass|css)", scss);
    watch("./src/js/**/*.js", js);
    watch("./src/img/**/*");
    watch(".src/fonts/**/*");
}


const build = series (
    clear,
    parallel(html, scss, js, img, font, icons)
);

const dev = series (
    build,
    parallel(watcher, server)
);

// Задачи
exports.html = html;
exports.css = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.icons = icons;

// Сборка

exports.default = isProd ? build : dev;