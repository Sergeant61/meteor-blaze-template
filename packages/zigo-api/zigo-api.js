// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See omni-commerce-tests.js for an example of importing.
export const name = 'omni-commerce';
ObjectToQueryString = obj => Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');

ZigoApi = {
  _baseUrl: Meteor.settings.public.zigoApi.baseUrl,

  logger: function () {
    console.info('zigoApi.logger', arguments);
  },

  authorizationToken: function () {
    return Meteor.user()?.profile.zigoApi.data.loginToken;
  },

  callbackError: function (_error, _callback) { 

    let errorMessage = _error.response.data?.message ? _error.response.data?.message : 'Sistem Hatası';
    const error = new Meteor.Error(_error.response.statusCode, errorMessage, _error.response.data);
    _callback(error, null);
  },

  call: function (_path, _datas, _callback) {
    let url = `${ZigoApi._baseUrl}${_path}`;
    const options = { data: _datas.params };
    const headers = {};

    const pagination = _datas.params.pagination;
    const queryParams = _datas.params.queryParams;
    const multiPart = _datas.params.multiPart;

    if (pagination) {
      const splited = url.split('?');

      const rootUrl = splited[0]
      const queryString = url.split('?')[1] || '';

      const searchParams = new URLSearchParams(queryString);

      if (pagination.per_page) {
        searchParams.set('per_page', pagination.per_page)
      }

      if (pagination.page) {
        searchParams.set('page', pagination.page)
      }

      url = `${rootUrl}?${searchParams.toString()}`
    }

    if (queryParams) {
      const splited = url.split('?');

      const rootUrl = splited[0]
      const queryString = url.split('?')[1] || '';

      const searchParams = new URLSearchParams(queryString);

      queryParams.forEach(data => {
        searchParams.set(data.key, data.value)
      });

      url = `${rootUrl}?${searchParams.toString()}`
    }

    if (multiPart) {
      const formData = new FormData();
      const files = multiPart.files;
      const key = multiPart.key;

      for (var i = 0; i < files.length; i++) {
        formData.append(key, files[i]);
      }

      delete options.data;
      options.content = formData;
    }

    if (Meteor.isClient) {
      const userLang = navigator.language || navigator.userLanguage;
      headers['Accept-Language'] = userLang;
    }

    if (_datas.isAuthorized) {
      let authorizationToken;

      if (Meteor.userId()) {
        authorizationToken = ZigoApi.authorizationToken();

        if (!authorizationToken) {
          return;
        }
      } else {
        if (Meteor.isClient) {
          Loading.hide();
          const path = FlowRouter.current()?.path;

          if (path) {
            FlowRouter.go(`/auth/signin?redirect=${path}`);
          } else {
            FlowRouter.go('/auth/signin');
          }

          return;
        }
      }

      headers.Authorization = authorizationToken;
    }

    options.headers = headers;

    HTTP.call(_datas.method, url, options, function (_error, _result) {
      if (_error) {
        ZigoApi.callbackError(_error, _callback);
        return;
      }

      let response = _result.data;
      let headers = _result.headers;

      try {
        response.currentPage = response.page
        response.totalDocs = response.totalDocs
      } catch (error) {
        console.log(error);
      }

      _callback(null, response);
    });
  },

  auth: ZigoApiAuth,
  files: ZigoApiFiles,
  owner: ZigoApiOwner,
  dummy: ZigoApiDummies,
  references: ZigoApiReferences
}