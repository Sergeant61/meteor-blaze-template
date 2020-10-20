ZigoApiFiles = {
  image: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'GET',
    };

    ZigoApi.call(`/api/files/${_args.file_id}`, datas, _callback);
  },

  upload: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'POST',
    };

    ZigoApi.call(`/api/files`, datas, _callback);
  },

  delete: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'DELETE',
    };

    ZigoApi.call(`/api/files/${_args.file_id}`, datas, _callback);
  },

  list: function (_args, _callback = ZigoApi.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'PATCH',
    };

    ZigoApi.call(`/api/files/all`, datas, _callback);
  },

};