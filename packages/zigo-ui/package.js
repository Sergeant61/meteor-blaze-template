Package.describe({
  name: 'zigo:ui',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Zigo UI package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');
  api.use('ecmascript');
  api.use('jquery@3.0.0');
  api.use('less@2.8.0');
  api.use('accounts-base');
  api.use('ostrio:flow-router-extra');

  api.addFiles('style.less', 'client');
  api.mainModule('zigo-ui.js');
  
  api.export('ZigoUi', 'client');
});

Npm.depends({
  sweetalert2: '9.10.13'
});