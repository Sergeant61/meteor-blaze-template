
Template.layoutSettings.onCreated(function () {

});


Template.layoutSettings.onRendered(function () {
  const self = this;
});

Template.layoutSettings.events({
  'click #sidebarCollapse': function (event, template) {
    $('#sidebar, #content').toggleClass('active');
  },
});