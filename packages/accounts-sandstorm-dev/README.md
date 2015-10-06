# accounts-sandstorm-dev

This was written as a companion to [kenton:accounts-sandstorm](https://github.com/sandstorm-io/meteor-accounts-sandstorm)

It does two things for you:

1. Inserts fake Sandstorm user headers when the meteor app is running in dev
   mode, so you can develop your app outside of Sandstorm

2. Provides a handful of helper functions mainly for use in client integration
   tests to stub out the current user permissions

The package uses the `debugOnly` flag to prevent it from being included in the production deployment. This means that if you want the fake headers to be added when deployed to meteor.com (say for a quick demo or CI environment) you'll need to run `meteor deploy` with `--debug`.

## Fake Headers in Dev Mode

You can control the values with environment variables, but defaults are also defined:

`STUB_USERNAME='Dev User'`

`STUB_USER_ID='dev-user-id'`

`STUB_PERMISSIONS='owner'`

**Note:** If you already had the browser open,
[clear your browser's local storage](http://stackoverflow.com/a/9404841/5270598).
Hard refreshing is not sufficient.

## Test Helpers

The helper functions are:

```
// Run with x-sandstorm-permissions = 'permissions,go,here'
withPermissions(['permissions', 'go', 'here'], function() { ... });

// Run with x-sandstorm-permissions = 'owner'
withOwner(function() { ... });

// Run with x-sandstorm-permissions = ''
withNoPermissions(function { ...});
```

For an example test, check out [tests/jasmine/client/integration/StubUserPermissionsSpec.js](https://github.com/jacksingleton/accounts-sandstorm-dev/blob/master/tests/jasmine/client/integration/StubUserPermissionsSpec.js)

