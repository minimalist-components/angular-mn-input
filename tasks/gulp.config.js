'use strict';

module.exports = {
  templates: {
    src: './sources/templates/*.jade',
    dest: './public/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
    output: 'angular-mn-input.css',
  },
  scripts: {
    src: [
      './sources/angular/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'angular-mn-input.js',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
  browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './public',
        './dist',
      ],
    },
    notify: false,
    reloadDelay: 100,
    open: false,
  },
  imgs: {
    src: './sources/imgs/*',
    dest: './public/imgs',
  },
};
