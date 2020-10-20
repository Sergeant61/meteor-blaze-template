import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.componentNavbar.onRendered(function () {

});

Template.componentNavbar.events({
  'click .logout': function (event, template) {
    event.preventDefault();
    Loading.show();

    Meteor.logout(function () {
      Loading.hide();
      FlowRouter.go('/auth/signin');
    });
  }
});
