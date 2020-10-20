ZigoApiAuth = {
  login: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: false,
      method: 'POST',
    };

    ZigoApi.call('/login', datas, _callback);
  },

  register: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: false,
      method: 'POST',
    };

    ZigoApi.call('/register', datas, _callback);
  },

  user: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'GET',
    };

    ZigoApi.call('/api/users', datas, _callback);
  },


  userAll: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'GET',
    };

    ZigoApi.call('/api/users/all', datas, _callback);
  },
};