import { Template } from 'meteor/templating';
import './index.html';
import Person from '/imports/collections/Person.js';
import Swal from 'sweetalert2';

Template.pageHome.onCreated(function () {
});

Template.pageHome.helpers({
  users: function () {
    return Person.find().fetch();
  }
});

Template.pageHome.onRendered(function () {
});

Template.pageHome.events({
  'submit #userInsert': function (event, template) {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;

    Meteor.call('insertPerson', { name: name, surname: surname }, function (error, success) {
      if (error) {
        console.log('error', error);
      }
      if (success) {
        Swal.fire({
          title: 'Kayıt eklendi',
          icon: 'success',
          confirmButtonText: 'Tamam'
        });
      }
    });
  },
  'click .edit': function (event, template) {
    event.preventDefault();
    const person = this;

    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Adnız',
        text: 'Düzenlemek için giriniz'
      },
      'Soyadınız',
    ]).then((result) => {
      if (result.value) {
        const answers = result.value

        const obj = {
          name: answers[0],
          surname: answers[1],
        }

        Meteor.call('editPerson', person._id, obj, function (error, success) {
          if (error) {
            console.log('error', error);
          }
          if (success) {
            Swal.fire({
              title: 'Kayıt silindi',
              icon: 'success',
              confirmButtonText: 'Tamam'
            });
          }
        });
      }
    })
  },
  'click .delete': function (event, template) {
    event.preventDefault();

    const person = this;

    Swal.fire({
      title: 'Emin misin?',
      text: 'Bu işlemi geri alamazsın!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--danger)',
      cancelButtonColor: 'var(--dark)',
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır'
    }).then((result) => {
      if (result.value) {
        Meteor.call('detelePerson', person._id, function (error, success) {
          if (error) {
            console.log('error', error);
          }
          if (success) {
            Swal.fire({
              title: 'Kayıt silindi',
              icon: 'success',
              confirmButtonText: 'Tamam'
            });
          }
        });
      }
    })
  }
});