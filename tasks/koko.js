var Koko = require('koko');

module.exports = function (grunt) {
    var taskName = 'koko',
        taskDescription = 'start up web server (proxy server)';

    grunt.registerMultiTask(taskName, taskDescription, function () {
        var target = this.target,
            config = grunt.config(taskName)[target],
            done = this.async(),

            root = config.root || process.cwd(),
            opts = config;

        var koko = new Koko(root, opts);
        koko.start();
    });
};