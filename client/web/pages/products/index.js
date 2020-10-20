import { Template } from 'meteor/templating';
import './index.html';

Template.pageProducts.onCreated(function () {

});

Template.pageProducts.onRendered(function () {
});

Template.pageProducts.events({
  'click .btn-danger': function (event, template) {
    event.preventDefault();
    Loading.show();

    ZigoApi.auth.user({}, function (_error, _result) {
      Loading.hide();
      if (_error) {
        ZigoUi.errorHandler(_error);
        return;
      }

      console.log(_result);
    });
  },
  'click .btn-primary': function (event, template) {
    event.preventDefault();
    Loading.show();

    ZigoApi.auth.userAll({}, function (_error, _result) {
      Loading.hide();
      if (_error) {
        ZigoUi.errorHandler(_error);
        return;
      }

      console.log(_result);
    });
  }
});