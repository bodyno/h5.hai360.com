module.exports = {
    copy: [
        'copy:js',
        'copy:plugin',
        'copy:others',
        'copy:local',
        'copy:image'
    ],
    clean: [
        'clean:tmp',
        'clean:svn'
    ]
}