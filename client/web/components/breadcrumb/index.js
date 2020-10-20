Template.componentBreadcrumb.helpers({
  isLastItem: function (index) {
    const pages = BreadcrumbUtil.pages.get();
    return (pages.length - 1) == parseInt(index)
  }
});

Template.componentBreadcrumb.onCreated(function () {

});

Template.componentBreadcrumb.onRendered(function () {
  const self = this;
});

Template.componentBreadcrumb.events({

});