function hello(cb) {
    console.log('Module');
    cb();
}

exports.hello = hello;