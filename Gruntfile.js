var grunt = require('grunt');
var stringify = require('stringify');

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-browserify');

grunt.initConfig({
    copy: {
        html: {
            src: 'src/app-template.html',
            dest: 'dist/index.html'
        },

        fonts: {
            expand: true,
            flatten: true,
            src: 'theme/fonts/*',
            dest: 'dist/fonts/'
        }
    },

    less: {
        main: {
            files: {
                'dist/theme.css': ['theme/bootstrap.less']
            }
        }
    },

    browserify: {
        main: {
            files: {
                'dist/app.js': ['src/app-module.js']
            },

            options: {
                transform: [stringify()]
            }
        }
    },

    connect: {
        server: {
            options: {
                port: 3000,
                base: 'dist',
                livereload: true
            }
        }
    },

    watch: {
        options: {
            livereload: true
        },

        scripts: {
            files: ['src/**/*.html', 'src/**/*.js'],
            tasks: ['browserify']
        },

        styles: {
            files: ['theme/**/*.less'],
            tasks: ['less']
        },

        copy: {
            files: ['src/index.html'],
            tasks: ['copy']
        }
    }
});

grunt.registerTask('default', ['copy', 'browserify', 'less', 'connect', 'watch']);