# Accounts Sandstorm Dev

This package provides two things:

1. Inserts fake Sandstorm user headers when the meteor app is running in dev
   mode, which is very handy during the development workflow

You can control the values with environment variables, but defaults are also defined:

`STUB_USERNAME='Dev User'`
`STUB_USER_ID='dev-user-id'`
`STUB_PERMISSIONS='owner'`

2. Provides a handful of helper functions mainly for use in client integration
   tests to stub out the current user permissions

The helper functions are:

```
// Execute with a custom permissions list
withPermissions(['permissions', 'go', 'here'], function() { ... });

// Execute with permissions = 'owner'
withOwner(function() { ... });

// Execute with permissions = ''
withNoPermissions(function { ...});
```
