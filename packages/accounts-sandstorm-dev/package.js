Package.describe({
  name: 'jacksingleton:accounts-sandstorm-dev',

  version: '0.1.0',

  summary: 'Stubs Sandstorm user headers and provides helper methods to control their values in tests',

  git: 'https://github.com/jacksingleton/accounts-sandstorm-dev.git',

  documentation: 'README.md',

  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('http@1.1.0');

  api.addFiles('insert-stub-headers.js', 'server');
  api.addFiles('test-helpers.js', 'client');

  api.export('withUserLoggedIn', 'client');
  api.export('withPermissions', 'client');
  api.export('withOwner', 'client');
  api.export('withNoPermissions', 'client');
});
