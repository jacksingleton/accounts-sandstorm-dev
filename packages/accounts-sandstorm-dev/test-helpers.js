withUserLoggedIn = this.withUserLoggedIn = function(f) {
  HTTP.get('/.sandstorm-credentials', function (error, result) {
    if (error) {
      console.error(error.stack);
    } else if (!result.data) {
      console.error('/.sandstorm-credentials is not JSON?');
    } else if (result.data.token) {
      Meteor.loginWithToken(result.data.token, f);
    }
  });
};

withPermissions = this.withPermissions = function(permissions, f) {
  Meteor.call('accountsSandstormDev.stubPermissions', permissions, function(error) {
    if (error) {
      console.error(error);
    } else {
      withUserLoggedIn(f);
    }
  });
};

withNoPermissions = this.withNoPermissions = function(f) {
  withPermissions([], f);
};

withOwner = this.withOwner = function(f) {
  withPermissions(['owner'], f);
};

