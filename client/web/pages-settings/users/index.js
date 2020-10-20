import { Template } from 'meteor/templating';
import './index.html';

Tree = {

  list: {
    options: {
      class: 'bg-transparent border-0',
      spanClass: 'bg-white',
      textClass: 'text-dark',
      activeClass: 'bg-danger',
    },

    parents: [{
      id: 1,
      title: 'parent 1',
      href: '',
      spanClass: '',
      textClass: '',
      child: [
        { id: 2, title: 'child 1', href: '', spanClass: '', textClass: '' },
        {
          id: 3, title: 'child 2', href: '', spanClass: '', textClass: '',
          grandChild: [
            {
              id: 2, title: 'grand child 1', href: '', spanClass: '', textClass: '',
              greatGrandChild: [
                { id: 2, title: 'great grand child 1', href: '', spanClass: '', textClass: '' }
              ]
            }
          ]
        }
      ]
    }]
  },

  add: function (body) {
    Tree.list.parents.push()
  },
}

Template.pageSettingsUsers.helpers({
  list: function () {
    return Tree.list;
  }
});

Template.pageSettingsUsers.onCreated(function () {
  BreadcrumbUtil.set('/settings/users', 'Kullanıcılar');
});

Template.pageSettingsUsers.onRendered(function () {
  $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');

  $('.tree a').addClass(Tree.list.options.textClass);
  $('.tree span').addClass(Tree.list.options.spanClass);

  $('.tree li.parent_li > span').on('click', function (e) {
    var children = $(this).parent('li.parent_li').find(' > ul > li');
    if (children.is(":visible")) {
      children.hide('fast');
      $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus-circle').removeClass('fa-minus-circle');
    } else {
      children.show('fast');
      $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
    }
    e.stopPropagation();
  });

});

Template.pageSettingsUsers.events({
  'click .brd-tree-click': function (event, template) {
    event.preventDefault();

    $('.tree a').removeClass('active').addClass(Tree.list.options.textClass).removeClass(Tree.list.options.activeClass)
    $(event.target).addClass('active').removeClass(Tree.list.options.textClass).addClass(Tree.list.options.activeClass);

    console.log(this);

  }
});