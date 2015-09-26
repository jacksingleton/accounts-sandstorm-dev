function defaults(value, fallback) {
  if (value === undefined) {
    return fallback;
  } else {
    return value;
  }
}

var STUB_PERMISSIONS = defaults(process.env.STUB_PERMISSIONS, 'owner');
var STUB_USER_ID = defaults(process.env.STUB_USER_ID, 'dev-user-id');
var STUB_USERNAME = defaults(process.env.STUB_USERNAME, 'Dev User');
var STUB_PREFERRED_HANDLE = defaults(process.env.STUB_PREFERRED_HANDLE, 'devuser');
var STUB_USER_PICTURE = defaults(process.env.STUB_USER_PICTURE, undefined);
var STUB_USER_PRONOUNS = defaults(process.env.STUB_USER_PRONOUNS, 'neutral');

Meteor.startup(function () {

  var shouldInsertFakeHeaders = function(req) {
    return req.headers['x-sandstorm-user-id'] === undefined;
  };

  var addSandstormUserHeaders = function(req, res, next) {
    if (shouldInsertFakeHeaders(req)) {
      req.headers['X-Sandstorm-User-Id'] = STUB_USER_ID;
      req.headers['X-Sandstorm-Username'] = STUB_USERNAME;
      req.headers['X-Sandstorm-Permissions'] = STUB_PERMISSIONS;
      req.headers['X-Sandstorm-Preferred-Handle'] = STUB_PREFERRED_HANDLE;
      req.headers['X-Sandstorm-User-Picture'] = STUB_USER_PICTURE;
      req.headers['X-Sandstorm-User-Pronouns'] = STUB_USER_PRONOUNS;
    }
    return next();
  };

  // Add the headers before any other handlers so that the
  // kenton:accounts-sandstorm package picks them up
  WebApp.rawConnectHandlers.stack.splice(0, 0, {
    route: '',
    handle: addSandstormUserHeaders
  });
});

Meteor.methods({
  'accountsSandstormDev.stubPermissions': function(permissions) {
    STUB_PERMISSIONS = permissions.join(',');
  }
});
