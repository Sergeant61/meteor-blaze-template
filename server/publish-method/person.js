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

// db.createUser({ user: "recep", pwd: "369147456852", roles: [{ role: "readWrite", db: "meteor" }] })
// db.createUser({ user: "admin", pwd: "369147456852", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })