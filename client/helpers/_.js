Translate = i18n.createReactiveTranslator();

Template.registerHelper('_', function(_key) {
  return Translate(_key, {
    _purify: true
  });
});