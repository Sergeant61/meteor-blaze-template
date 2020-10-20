import Swal from 'sweetalert2';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.pageSignin.events({
  'submit form': function (event, template) {
    event.preventDefault();
    Loading.show();

    const emailAddress = event.target.emailAddress.value;
    const password = event.target.password.value;

    Meteor.loginWithZigoApi(emailAddress, password, function (error, result) {
      Loading.hide();

      if (error) {
        Swal.fire({
          title: 'Hata',
          text: error.reason,
          icon: 'error',
          confirmButtonText: 'Tamam'
        });
        return;
      }

      FlowRouter.go('/');
    });
  }
})