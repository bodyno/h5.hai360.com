'use strict';

module.exports = {
    options: {
        sourcemap: false
    },
    build: {
        expand: true,
        cwd: '<%=yo.app%>/static/styles',
        src: ['**/*.scss'],
        dest: '.tmp/static/styles',
        ext: '.css'
    }
}
