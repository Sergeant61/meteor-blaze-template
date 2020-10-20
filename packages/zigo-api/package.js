Package.describe({
  name: 'zigo:api',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Zigo API Meteor client package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.1');
  api.use('ecmascript');
  api.use('http');
  api.use('accounts-base');

  api.imply('accounts-base', ['client', 'server']);

  api.addFiles('accounts-zigo/server/index.js', 'server');
  api.addFiles('accounts-zigo/client/index.js', 'client');
  api.addFiles('auth.js', ['server', 'client']);
  api.addFiles('files.js', ['server', 'client']);
  api.addFiles('dummies.js', ['server', 'client']);
  api.addFiles('owner.js', ['server', 'client']);
  api.addFiles('references.js', ['server', 'client']);

  api.mainModule('zigo-api.js');
  api.export('ZigoApi', ['server', 'client']);
});