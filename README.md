# accounts-sandstorm-dev

This was written as a companion to kenton:accounts-sandstorm

It provides two things:

1. Inserts fake Sandstorm user headers when the meteor app is running in dev
   mode, which is very handy during the development workflow

2. Provides a handful of helper functions mainly for use in client integration
   tests to stub out the current user permissions

The package uses the `debugOnly` flag to prevent it from being included in the production deployment. This means that if you want the fake headers to be added when deployed to meteor.com (say for a quick demo or CI environment) you'll need to run `meteor deploy` with `--debug`.

## Fake Headers in Dev Mode

You can control the values with environment variables, but defaults are also defined:

`STUB_USERNAME='Dev User'`
`STUB_USER_ID='dev-user-id'`
`STUB_PERMISSIONS='owner'`

## Test Helpers

The helper functions are:

```
// Execute with a custom permissions list
withPermissions(['permissions', 'go', 'here'], function() { ... });

// Execute with permissions = 'owner'
withOwner(function() { ... });

// Execute with permissions = ''
withNoPermissions(function { ...});
```

For an example test, check out [tests/jasmine/client/integration/StubUserPermissionsSpec.js](/tests/jasmine/client/integration/StubUserPermissionsSpec.js)
