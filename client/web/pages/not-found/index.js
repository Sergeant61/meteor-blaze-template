import { Template } from 'meteor/templating';
import './index.html';

Template.pageNotFound.onCreated(function () {

});

Template.pageNotFound.onRendered(function () {
});

Template.pageNotFound.events({
  'click .go-back': function (event, template) {
    event.preventDefault();
    window.history.back()
  }

});