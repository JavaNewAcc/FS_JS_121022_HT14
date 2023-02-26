function hello(cb) {
    console.log('Hello gulp');
    cb();
}

function world(cb) {
    console.log('Hello world');
    cb();
}

exports.hello = hello;
exports.world = world;





//new

var path = {
    images: 'img/*.png',
    css: 'style/*.css',
    buildImg: 'dist/img',
    buildStyle: 'dist/style'
}

const { src, dest, series, parallel } = require('gulp');

function images(cb) {
    // return src(path.images)
    //     .pipe(dest(path.buildImg))
    console.log("Images");
    cb();
}

function css() {
    // return src(path.css)
    //     .pipe(dest(path.buildStyle))
    console.log("css");
    cb();
}

exports.paral = parallel(images, css);
exports.default = series(images, css);