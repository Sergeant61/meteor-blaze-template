Meteor.publish('person-all', function () {
  return Person.find();
});

Meteor.methods({
  insertPerson: function (obj, _callback) {
    Person.insert(obj);
  },
  detelePerson: function (id) {
    Person.remove(id);
  },
  editPerson: function (id, obj) {
    Person.update(id, obj);
  }
});