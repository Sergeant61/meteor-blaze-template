Accounts.registerLoginHandler('omni-commerce', function (loginRequest) {
  if (!loginRequest.zigoApi) {
    return undefined;
  }

  let zigoUser = null;
  let loginObject = null;
  let loginFunction = Meteor.wrapAsync(ZigoApi.auth.login);

  loginObject = {
    username: loginRequest.username,
    password: loginRequest.password
  };

  try {
    zigoUser = loginFunction(loginObject);
  } catch (error) {
    throw error;
  }

  const user = Meteor.users.findOne({
    'username': loginRequest.username
  });

  let userId = null;

  if (!user) {
    userId = Meteor.users.insert({ username: loginRequest.username });
  } else {
    userId = user._id;
  }

  const stampedToken = Accounts._generateStampedLoginToken();
  const hashStampedToken = Accounts._hashStampedToken(stampedToken);

  Meteor.users.update(userId, {
    $push: {
      'services.resume.loginTokens': hashStampedToken
    },

    $set: {
      'profile.zigoApi': zigoUser
    }
  });

  return {
    userId: userId,
    token: stampedToken.token
  }
});