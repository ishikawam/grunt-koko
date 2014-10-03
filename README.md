grunt-koko
====

grunt plugin to start koko as task.

### install

```
% cd your/grunt/project/root
% npm install grunt-koko --save-dev
```

### usage

```javascript:Gruntfile.js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        koko: {
            dev: {
                openPath: '/'
            },
            debug: {
                openPath: '/',
                proxyURL: 'http://fnobi.com/'
            },
            assetsChecker: {
                root: 'htdocs/',
                staticPort: '9999',
                openPath: '/',
                usePHP: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-koko');

    grunt.registerTask('default', ['koko:dev']);
};
```
