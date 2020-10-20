Translate = i18n.createReactiveTranslator();

Template.registerHelper('generateFileUrl', function (id) {
  const baseUrl = Meteor.settings.public.zigoApi.baseUrl;
  const token = Meteor.user()?.profile.zigoApi.data.loginToken;
  const url = `${baseUrl}/api/files/${id}?token=${token}`
  return url;

});