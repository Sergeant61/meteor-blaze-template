Template.registerHelper('ago', function(a) {
  return Chronos.moment(a).fromNow();
});