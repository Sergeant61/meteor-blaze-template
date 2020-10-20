Meteor.loginWithZigoApi = function (username, password, callback) {
  const loginRequest = { zigoApi: true, username: username, password: password };

  Accounts.callLoginMethod({
    methodArguments: [loginRequest],
    userCallback: callback
  });
};