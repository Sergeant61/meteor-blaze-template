// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See omni-commerce-ui-tests.js for an example of importing.
export const name = 'zigo-ui';
import Swal from 'sweetalert2';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

ZigoUi = {
  errorHandlerReset: function () {
    $('.zigo-ui-form-group label').attr('data-content', null);
    $('label').prev().removeClass('.zigo-ui-input-error');
  },

  errorHandler: function (_error) {
    if (_error.error == 400 || _error.error == 404) {
      const errors = _error.details.message;

      Swal.fire({
        title: 'Hata',
        text: errors,
        icon: 'error',
        confirmButtonText: 'Tamam'
      });

      return;
    }

    if (_error.error == 401) {
      Meteor.logout(function () {
        FlowRouter.go('/auth/signin');
      });
    }

  },
}