Package.describe({
  name: 'accounts-sandstorm-dev',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Stubs out Sandstorm user headers and provides helper methods to stub them in client integration tests',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('http@1.1.0');

  api.imply('kenton:accounts-sandstorm');

  api.addFiles('insert-stub-headers.js', 'server');
  api.addFiles('test-helpers.js', 'client');

  api.export('withUserLoggedIn', 'client');
  api.export('withPermissions', 'client');
  api.export('withOwner', 'client');
  api.export('withNonOwner', 'client');
});
