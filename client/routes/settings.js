import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const routes = FlowRouter.group({
  prefix: '/settings',
  name: 'settings',
  triggersEnter: [MustSignIn]
});

routes.route('/users', {
  action: function (params, queryParams) {
    this.render('layoutSettings', 'pageSettingsUsers', { nav: 'componentNavbar', page: 'pageSettingsUsers' });
  }
});

routes.route('/files', {
  action: function (params, queryParams) {
    this.render('layoutSettings', 'pageSettingsUsers', { nav: 'componentNavbar', page: 'pageSettingsFiles' });
  }
});
