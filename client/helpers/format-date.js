Template.registerHelper('formatDate', function(a) {
  return moment(a).format('DD/MM/YYYY');
});