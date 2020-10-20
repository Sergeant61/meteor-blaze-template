const bodyParser = require('body-parser');

Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded({ extended: false }));

Picker.route('/api/', function (params, request, response, next) {

  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Success', status: true, statusCode: 200, data: { message: 'Hello, welcome Meteor.js Api' } }));
});

var postRoutes = Picker.filter(function (req, res) {
  // you can write any logic you want.
  // but this callback does not run inside a fiber
  // at the end, you must return either true or false
  return req.method == "POST";
});

postRoutes.route('/post/:id', function (params, req, res, next) {

  response.end(params);

});