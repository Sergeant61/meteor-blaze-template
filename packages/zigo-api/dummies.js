ZigoApiDummies = {
  addItem: function(_args, _callback = OmniCommerce.logger) {
    const datas = {
      params: _args,
      isAuthorized: false,
      method: 'POST',
      returnOnlyData: true
    };

    OmniCommerce.call(`/dummy/add_item?customer_id=${_args.customer_id}`, datas, _callback);
  },

  updateCart: function(_args, _callback = OmniCommerce.logger) {
    const datas = {
      params: _args,
      isAuthorized: false,
      method: 'PATCH',
      returnOnlyData: true
    };

    OmniCommerce.call(`/dummy/update_cart?customer_id=${_args.customer_id}`, datas, _callback);
  },

  query: function(_args, _callback = OmniCommerce.logger) {
    const datas = {
      params: _args,
      isAuthorized: false,
      method: 'GET',
      returnOnlyData: true
    };

    OmniCommerce.call('/dummy/query', datas, _callback);
  },

  paymentLink: function(_args, _callback = OmniCommerce.logger) {
    const datas = {
      params: _args,
      isAuthorized: false,
      method: 'POST',
      returnOnlyData: true
    };

    OmniCommerce.call('/public_payment/iframe', datas, _callback);
  }
};