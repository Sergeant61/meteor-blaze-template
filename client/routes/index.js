import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';

FlowRouter.route('/home', {
  name: 'home',
  action: function (params, queryParams) {
    this.render('layoutDefault', 'pageHome', { nav: 'componentNavbar', page: 'pageHome', footer: 'componentFooter' });
  }
});

FlowRouter.route('/products', {
  name: 'products',
  action: function (params, queryParams) {
    this.render('layoutDefault', 'pageProducts', { nav: 'componentNavbar', page: 'pageProducts', footer: 'componentFooter' });
  }
});

FlowRouter.route('/contact', {
  name: 'contact',
  action: function (params, queryParams) {
    this.render('layoutDefault', 'pageContact', { nav: 'componentNavbar', page: 'pageContact', footer: 'componentFooter' });
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action: function (params, queryParams) {
    this.render('layoutDefault', 'pageAbout', { nav: 'componentNavbar', page: 'pageAbout', footer: 'componentFooter' });
  }
});

FlowRouter.route('*', {
  name: 'notFound',
  action() {
    // Show 404 error page
    this.render('layoutDefault', 'pageNotFound', { page: 'pageNotFound' });
  }
});

new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);
