var Koko = require('koko');

module.exports = function (grunt) {
    grunt.registerMultiTask('koko', 'start up web server (proxy server)', function () {
        var target = this.target;
        var done = this.async();

        var koko = new Koko(process.cwd(), grunt.config('koko')[target]);
        koko.start();
    });
};