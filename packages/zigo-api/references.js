ZigoApiReferences = {
  industries: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/industries', datas, _callback);
    },
  },

  payments: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/reference/payment_methods`, datas, _callback);
    },

    gateways: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/reference/payment_gateways`, datas, _callback);
    },

  },

  plans: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/plans', datas, _callback);
    },
  },

  addressTypes: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/addresses', datas, _callback);
    }
  },

  states: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/states', datas, _callback);
    }
  },

  scriptedMessageTypes: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/scripted_message_types', datas, _callback);
    }
  },

  appointmentStatuses: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: {},
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/appointment_statuses', datas, _callback);
    }
  },

  announcementStatuses: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/announcement_statuses', datas, _callback);
    }
  },

  currencies: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/currencies', datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/reference/currencies/${_args.currency_id}`, datas, _callback);
    },
  },


  roles: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/roles', datas, _callback);
    }
  },

  countries: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      let page = 1;
      let per_page = 1000;

      if (_args.page) {
        page = _args.page
      }

      if (_args.per_page) {
        per_page = _args.per_page
      }

      OmniCommerce.call(`/reference/countries?page=${page}&per_page=${per_page}`, datas, _callback);
    }
  },

  cities: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: {},
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      let page = 1;
      let per_page = 1000;

      if (_args.page) {
        page = _args.page
      }

      if (_args.per_page) {
        per_page = _args.per_page
      }

      OmniCommerce.call(`/reference/countries/${_args.country_id}/cities?page=${page}&per_page=${per_page}`, datas, _callback);
    },

    locations: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: {},
          isAuthorized: false,
          method: 'GET',
          returnOnlyData: true
        };

        let page = 1;
        let per_page = 1000;

        if (_args.page) {
          page = _args.page
        }

        if (_args.per_page) {
          per_page = _args.per_page
        }

        OmniCommerce.call(`/reference/cities/${_args.city_id}/locations?page=${page}&per_page=${per_page}`, datas, _callback);
      }
    }
  },

  districts: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: {},
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      let page = 1;
      let per_page = 1000;

      if (_args.page) {
        page = _args.page
      }

      if (_args.per_page) {
        per_page = _args.per_page
      }

      OmniCommerce.call(`/reference/cities/${_args.city_id}/districts?page=${page}&per_page=${per_page}`, datas, _callback);
    },

    locations: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: {},
          isAuthorized: false,
          method: 'GET',
          returnOnlyData: true
        };

        let page = 1;
        let per_page = 1000;

        if (_args.page) {
          page = _args.page
        }

        if (_args.per_page) {
          per_page = _args.per_page
        }

        OmniCommerce.call(`/reference/district/${_args.district_id}/locations?page=${page}&per_page=${per_page}`, datas, _callback);
      }
    }
  },

  neighborhoods: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: {},
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      let page = 1;
      let per_page = 1000;

      if (_args.page) {
        page = _args.page
      }

      if (_args.per_page) {
        per_page = _args.per_page
      }

      OmniCommerce.call(`/reference/districts/${_args.district_id}/neighborhoods?page=${page}&per_page=${per_page}`, datas, _callback);
    }
  },

  fields: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/fields', datas, _callback);
    }
  },

  optionTypes: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/option_types', datas, _callback);
    }
  },

  days: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/reference/days', datas, _callback);
    }
  }
}