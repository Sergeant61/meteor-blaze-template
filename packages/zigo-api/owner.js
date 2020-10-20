ZigoApiOwner = {
  roles: {
    permissions: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/permissions`, datas, _callback);
      },

      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/permissions/${_args.permission_id}`, datas, _callback);
      }
    },

    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/roles`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/roles/${_args.role_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/roles`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PATCH',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/roles/${_args.role_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/roles/${_args.role_id}`, datas, _callback);
    },

    assignUsers: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/roles/${_args.role_id}/assign`, datas, _callback);
    },

    unassignUsers: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/roles/${_args.role_id}/unassign`, datas, _callback);
    },
  },

  bulk: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };
      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxons/bulk`, datas, _callback);
    },
  },

  stats: function (_args, _callback = OmniCommerce.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'GET',
      returnOnlyData: true
    };
    OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/stats`, datas, _callback);
  },

  appointments: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/appointments`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/appointments/${_args.appointment_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/appointments`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/appointments/${_args.appointment_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/appointments/${_args.appointment_id}`, datas, _callback);
    },
  },

  subscriptions: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/subscriptions`, datas, _callback);
    },

    current: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/subscriptions/current`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/subscriptions/${_args.subscription_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/subscriptions/start`, datas, _callback);
    },

    switch: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/subscriptions/switch`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/subscriptions/${_args.subscription_id}`, datas, _callback);
    },
  },

  announcements: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/announcements`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/announcements/${_args.announcement_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/announcements`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/announcements/${_args.announcement_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/announcements/${_args.announcement_id}`, datas, _callback);
    },
  },

  scriptedMessages: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/scripted_messages`, datas, _callback);
    },

    listTermination: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/scripted_messages?${ObjectToQueryString(_args)}`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/scripted_messages/${_args.scripted_message_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/scripted_messages`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/scripted_messages/${_args.scripted_message_id}`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/scripted_messages/${_args.scripted_message_id}`, datas, _callback);
    }

  },

  users: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/users`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/users/${_args.user_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/users`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/users/${_args.user_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/users/${_args.user_id}`, datas, _callback);
    },
  },

  tags: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/tags`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/tags/${_args.tag_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/tags`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/tags/${_args.tag_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/tags/${_args.tag_id}`, datas, _callback);
    },
  },

  payments: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/payment_methods`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/payment_methods`, datas, _callback);
    },

  },

  taxonomies: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}`, datas, _callback);
    }
  },

  taxons: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}/taxons`, datas, _callback);
    },

    search: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxons/bulk?q=${_args.keyword}`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}/taxons/${_args.taxon_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}/taxons`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}/taxons/${_args.taxon_id}`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/taxonomies/${_args.taxonomy_id}/taxons/${_args.taxon_id}`, datas, _callback);
    }
  },

  products: {
    variants: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/variants/choosables`, datas, _callback);
      },

      listChoosable: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/extras/choosables`, datas, _callback);
      },

      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/variants/${_args.variant_id}`, datas, _callback);
      },

      create: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/variants`, datas, _callback);
      },

      update: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PUT',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/variants/${_args.variant_id}`, datas, _callback);
      },

      delete: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/variants/${_args.variant_id}`, datas, _callback);
      },

      deleteImage: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/variants/${_args.variant_id}/destroy_image/${_args.image_id}`, datas, _callback);
      },
    },

    extras: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/extras`, datas, _callback);
      },

      listByAvailable: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/extras?available=true`, datas, _callback);
      },

      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/extras/${_args.extra_id}`, datas, _callback);
      },


      create: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/extras`, datas, _callback);
      },

      update: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PUT',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/extras/${_args.extra_id}`, datas, _callback);
      },

      delete: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}/extras/${_args.extra_id}`, datas, _callback);
      }
    },

    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products?page=1&per_page=1000`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}`, datas, _callback);
    },

    listByTaxons: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products?${ObjectToQueryString(_args)}`, datas, _callback);
    },

    search: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products?q=${_args.keyword}`, datas, _callback);
    },

    listMaster: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/master`, datas, _callback);
    },

    searchMaster: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/master`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/products/${_args.product_id}`, datas, _callback);
    },
  },

  regions: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/regions`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/regions/${_args.region_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/regions`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/regions/${_args.region_id}`, datas, _callback);
    },

    remove: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/regions/${_args.region_id}`, datas, _callback);
    },
  },

  tenants: {
    address: {
      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/address`, datas, _callback);
      },

      update: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/address`, datas, _callback);
      },
    },

    fields: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/fields`, datas, _callback);
      },

      update: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PUT',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/fields`, datas, _callback);
      },
    },

    images: {
      create: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PUT',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}`, datas, _callback);
      },

      destroy: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/destroy_image/${_args.image_id}`, datas, _callback);
      },
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}`, datas, _callback);
    },

    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('/owner/tenants', datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}`, datas, _callback);
    },

    reviews: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/reviews`, datas, _callback);
    },

    reset: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/reset`, datas, _callback);
    },

    settings: {
      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };
  
        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/settings`, datas, _callback);
      },

      update: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PUT',
          returnOnlyData: true
        };
  
        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/settings`, datas, _callback);
      },
    }
  },

  channels: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/messaging_channels`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/messaging_channels/${_args.channel_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/messaging_channels`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/messaging_channels/${_args.channel_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/messaging_channels/${_args.channel_id}`, datas, _callback);
    },
  },

  workingHours: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/working_hours`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/working_hours/${_args.working_hour_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/working_hours`, datas, _callback);
    },


    upsert: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/working_hours/upsert`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/working_hours/${_args.working_hour_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/working_hours/${_args.working_hour_id}`, datas, _callback);
    },
  },

  customers: {
    addresses: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/addresses`, datas, _callback);
      },

      create: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/addresses`, datas, _callback);
      },

      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/addresses/${_args.address_id}`, datas, _callback);
      },

      update: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PUT',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/addresses/${_args.address_id}`, datas, _callback);
      },

      delete: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/addresses/${_args.address_id}`, datas, _callback);
      },
    },

    tags: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/tags`, datas, _callback);
      },

      create: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/tags`, datas, _callback);
      },

      delete: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/tags/${_args.tag_id}/`, datas, _callback);
      },
    },

    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}`, datas, _callback);
    },

    creditCards: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/credit_cards`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}`, datas, _callback);
    },

    magicLink: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/magic_link`, datas, _callback);
    },

    loginWithMagicLink: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: false,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call('http://lvh.me:3000/passwordless/sign_in/GXswnFGzFmnUQ0-QL5YB21xEinvU9aDztH9MlzcUKhY', datas, _callback);
    },

    cart: {
      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart`, datas, _callback);
      },

      addLineItem: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/add_item`, datas, _callback);
      },

      updateNote: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PATCH',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/update_note`, datas, _callback);
      },

      updateAssociatedOrderNumber: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PATCH',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/update_associated_order_number`, datas, _callback);
      },

      updateLineItemNote: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PATCH',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/update_line_item_note`, datas, _callback);
      },

      updateShippingType: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PATCH',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/update_shipping_type`, datas, _callback);
      },

      updateLineItemQuantity: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PATCH',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/update_quantity`, datas, _callback);
      },

      updateItemExtras: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PATCH',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/update_extras`, datas, _callback);
      },

      deleteItem: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart/remove_item`, datas, _callback);
      },

      delete: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/customers/${_args.customer_id}/cart`, datas, _callback);
      },
    },
  },

  orders: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders`, datas, _callback);
    },

    listCustomerOrders: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders?customer_id=${_args.customer_id}`, datas, _callback);
    },

    search: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders?q=${_args.keyword}`, datas, _callback);
    },

    searchByState: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders?state=${_args.keyword}`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders/${_args.order_id}`, datas, _callback);
    },

    cancel: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders/${_args.order_id}/cancel`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders/${_args.number}`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/orders/${_args.order_id}`, datas, _callback);
    },
  },

  account: function (_args, _callback = OmniCommerce.logger) {
    const datas = {
      params: _args,
      isAuthorized: true,
      method: 'GET',
      returnOnlyData: true
    };

    OmniCommerce.call(`/owner/account`, datas, _callback);
  },

  calendars: {
    list: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars`, datas, _callback);
    },

    show: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}`, datas, _callback);
    },

    showCurrent: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/current`, datas, _callback);
    },

    timeSlots: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'GET',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}/time_slots`, datas, _callback);
    },

    create: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'POST',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars`, datas, _callback);
    },

    update: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'PUT',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}`, datas, _callback);
    },

    delete: function (_args, _callback = OmniCommerce.logger) {
      const datas = {
        params: _args,
        isAuthorized: true,
        method: 'DELETE',
        returnOnlyData: true
      };

      OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}`, datas, _callback);
    },

    schedules: {
      list: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}/schedules`, datas, _callback);
      },

      show: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'GET',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}/schedules/${_args.schedule_id}`, datas, _callback);
      },

      create: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}/schedules`, datas, _callback);
      },

      bulkInsert: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'POST',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}/schedules/insert`, datas, _callback);
      },

      update: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'PUT',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}/schedules/${_args.schedule_id}`, datas, _callback);
      },

      delete: function (_args, _callback = OmniCommerce.logger) {
        const datas = {
          params: _args,
          isAuthorized: true,
          method: 'DELETE',
          returnOnlyData: true
        };

        OmniCommerce.call(`/owner/tenants/${_args.tenant_slug}/calendars/${_args.calendar_id}/schedules/${_args.schedule_id}`, datas, _callback);
      },
    }

  }

};