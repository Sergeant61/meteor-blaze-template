import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const routes = FlowRouter.group({
  prefix: '/auth',
  name: 'auth',
  triggersEnter: [MustSignOut]
});

routes.route('/signin', {
  action: function (params, queryParams) {
    this.render('layoutDefault', 'pageHome', { page: 'pageSignin' });
  }
});

routes.route('/signup', {
  action: function (params, queryParams) {
    this.render('layoutDefault', 'pageHome', { page: 'pageSignup' });
  }
});
