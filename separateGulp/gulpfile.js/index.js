const { series } = require('gulp');
const { hello } = require('./cssModule');

function css(cb) {
    console.log('css');
    cb();
}

exports.default = series(hello, css);