Template.registerHelper('formatDateTime', function(a) {
  return moment(a).format('DD/MM/YYYY - HH:mm');
});