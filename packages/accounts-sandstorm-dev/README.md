# Accounts Sandstorm Dev

This package does two things:

1. Adds stub sandstorm user headers when the app is running in
   dev mode.

This lets apps that depend on user headers from sandstorm run
outside of Sandstorm (ie via `meteor` or `meteor dev`) - which
is helpful during the development workflow.

2. Allows changing the permissions of the logged in user in tests.

The package exports several functions:

* `withUserLoggedIn(callback)`
* `withPermissions(permissions, callback)`
* `withOwner(callback)`
* `withNonOwner(callback)`

`withUserLoggedIn` just insures that the user has been logged in on the client side by the time the callback runs.

The rest 
