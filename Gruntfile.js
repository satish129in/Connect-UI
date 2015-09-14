module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
                stripBanners: true
                //sourceMap: true
            },
            dist: {
                src: ['src/init.js', 'src/view/**/*.js', 'src/shared/**/*.js'],
                dest: 'src/<%= pkg.name %>.js'
            },
            e2e: {
                files: {
                    'src/<%= pkg.name %>_e2e.js': ['src/init_e2e.js', 'src/view/**/*.js', 'src/shared/**/*.js']
                }
            }
        },
        removelogging: {
            dist: {
                src: "src/<%= pkg.name %>.js"
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>.min.js | Version : <%= pkg.version %> | Build Date : <%= grunt.template.today("mm/dd/yyyy") %> | USPTO | Aj */',
                sourceMap: true
            },
            dist: {
                files: {
                    'src/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/init.js', 'src/init_e2e.js', 'src/view/**/*.js', 'src/shared/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: './src',
                src: ['json/**','css/**', 'fonts/**','images/**', 'lib/**', 'shared/**/*.html','shared/**/*.js', 'view/**/*.html', '*min.js*', 'index.html'],
                dest: './build/',
                timestamp: true
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'concat', 'uglify', 'copy']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-remove-logging");

    grunt.registerTask('default', ['jshint', 'concat', 'removelogging', 'uglify', 'copy']);

};