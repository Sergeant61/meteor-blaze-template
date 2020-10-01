ToArray = function (obj) {
  return Object.entries(obj).map(function (o) {
    return {
      id: o[0],
      label: o[1]
    }
  });
};

Template.registerHelper('toArray', function (obj) {
  const array = ToArray(obj);
  return array;
});