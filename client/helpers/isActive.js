import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

IsActive = function (value, htmlClass = 'active') {
  const isActive = FlowRouter._current.path.includes(value);
  if (isActive) {
    return htmlClass
  }
}

Template.registerHelper('isActive', function (value, htmlClass) {
  FlowRouter.watchPathChange();
  return IsActive(value, htmlClass);
});