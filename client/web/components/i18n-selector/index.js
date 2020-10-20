const getLang = function () {
  const lang = navigator.languages && navigator.languages[0] ||
    navigator.language ||
    navigator.browserLanguage ||
    navigator.userLanguage ||
    'en-US'
  return lang
}
i18n.setLocale(getLang());

const _currentLocale = new ReactiveVar(i18n.getLocale());

Template.componentI18nSelector.onCreated(function () {

});

Template.componentI18nSelector.helpers({
  currentLocale: function() {
    return _currentLocale;
  }
});

Template.componentI18nSelector.onRendered(function () {
  const self = this;

  this.autorun(function () {
    const lang = _currentLocale.get();
    document.documentElement.setAttribute('lang', lang.slice(0, 2));
  });
});


Template.componentI18nSelector.events({
  'click .brd-language': function (event, template) {
    event.preventDefault();
    const locale = event.target.dataset.code;
    i18n.setLocale(locale);
    _currentLocale.set(locale);
  }
});