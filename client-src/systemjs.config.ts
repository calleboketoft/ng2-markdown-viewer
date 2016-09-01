declare var System
System.config({
  baseURL: '/',
  warnings: true,
  map: {
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    'rxjs': 'node_modules/rxjs',
    'commonmark': 'node_modules/commonmark',
    'highlight.js': 'node_modules/highlight.js'
  },
  packages: {
    'client-src': {defaultExtension: 'js'},
    'commonmark': {defaultExtension: 'js', main: 'dist/commonmark.js'},
    'highlight.js': {defaultExtension: 'js', main: 'lib/index.js'},
    'rxjs': {defaultExtension: 'js'},
    '@angular/common': {defaultExtension: 'js'},
    '@angular/compiler': {defaultExtension: 'js'},
    '@angular/core': {defaultExtension: 'js'},
    '@angular/forms': {defaultExtension: 'js'},
    '@angular/http': {defaultExtension: 'js'},
    '@angular/platform-browser': {defaultExtension: 'js'},
    '@angular/platform-browser-dynamic': {defaultExtension: 'js'}
  }
})