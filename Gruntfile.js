module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  // * Read command-line switches
  // - Read in --browsers CLI option; split it on commas into an array if it's a string, otherwise ignore it
  var browsers = typeof grunt.option('browsers') === 'string' ? grunt.option('browsers').split(',') : undefined;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    library: grunt.file.readJSON('bower.json'),
    ngtemplates:  {
      app:        {
        cwd:      'src/<%= library.name %>/templates',
        src:      'theme/**.html',
        dest:     '.tmp/templates.js',
        options: {
          module:   'ngS3upload'
        }
      }
    },
    concat: {
      options: {
        separator: ';\n'
      },
      library: {
        src: [
          '.tmp/js/src/<%= library.name %>/<%= library.name %>.prefix',
          '.tmp/js/src/<%= library.name %>/<%= library.name %>.js',
          '.tmp/js/src/<%= library.name %>/services/**/*.js',
          '.tmp/js/src/<%= library.name %>/directives/**/*.js',
          '.tmp/js/src/<%= library.name %>/filters/**/*.js',
          '<%= ngtemplates.app.dest %>',
          '.tmp/js/src/<%= library.name %>/<%= library.name %>.suffix'
        ],
        dest: 'build/<%= library.name %>.js'
      }
    },
    'babel': {
        options: {
            sourceMap: 'inline'
        },
        source: {
            expand: true,
            src: ['src/**/*.js'],
            dest: '.tmp/js/'
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      jid: {
        files: {
          'build/<%= library.name %>.min.js': ['build/<%= library.name %>.js']
        }
      }
    },
    jshint: {
      beforeConcat: {
        src: ['gruntfile.js', '<%= library.name %>/**/*.js']
      },
      afterConcat: {
        src: [
          '<%= concat.library.dest %>'
        ]
      },
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          angular: true
        },
        globalstrict: false
      }
    },
    testFiles: {
      karmaUnit: 'karma.conf.js'
    },
    karma: {
      unit: {
        options: {
          configFile: '<%= testFiles.karmaUnit %>',
          autoWatch: false,
          singleRun: true,
          browsers: browsers || ['Chrome']
        }
      }
    },
    watch: {
      options: {
        livereload: false
      },
      files: [
        'Gruntfile.js',
        'src/**/*'
      ],
      tasks: ['default']
    },
    clean: {
      dist: {
        files: [{
          dot: false,
          src: [
            '.tmp',
            'build/'
          ]
        }]
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'karma:unit']);
  grunt.registerTask('default', ['clean:dist','jshint:beforeConcat', 'ngtemplates', 'babel', 'concat', 'uglify']);
  grunt.registerTask('livereload', ['default', 'watch']);

};
