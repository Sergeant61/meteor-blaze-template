import Swal from 'sweetalert2';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.pageSignup.events({
  'submit form': function (event, template) {
    event.preventDefault();
    Loading.show();

    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;

    const obj = {
      name: first_name,
      surname: last_name,
      username: username,
      password: password,
      email: email
    };

    ZigoApi.auth.register(obj, function (_error, _result) {
      Loading.hide();
      if (_error) {
        ZigoUi.errorHandler(_error);
        return;
      }

      Swal.fire({
        title: 'E-mailinize aktifleştirme postası gönderildi.',
        icon: 'success',
        confirmButtonText: 'Tamam'
      });

      FlowRouter.go('/auth/signin')

    });
  }
})