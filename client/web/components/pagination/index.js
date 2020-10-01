Template.webComponentPagination.onCreated(function () {
  this.data.pages = new ReactiveVar([]);
  this.data.refreshToken = new ReactiveVar();
});

Template.webComponentPagination.onRendered(function () {
  const self = this;

  this.autorun(function () {
    self.data.refreshToken.get();

    const currentPage = Template.instance().data.currentPage.get();
    const totalCount = Template.instance().data.totalCount.get();
    const pageItems = Template.instance().data.pageItems.get();
    const page = Math.ceil(totalCount / pageItems);
    const pages = [];

    if (page > 7) {

      const startCount = currentPage - 5 < 0 ? 0 : currentPage - 5
      const endCount = currentPage + 5 > page ? page : currentPage + 5

      if (startCount > 0) {
        pages.push({ value: startCount, text: '...' })
      }
      for (let i = startCount; i < endCount; i++) {
        pages.push({ value: i + 1, text: i + 1 })
      }
      if (endCount < page) {
        pages.push({ value: endCount + 1, text: '...' })
      }
    } else {
      for (let i = 0; i < page; i++) {
        pages.push({ value: i + 1, text: i + 1 })
      }
    }


    self.data.pages.set(pages);
  });
});


Template.webComponentPagination.events({
  'click .brd-previous': function (event, template) {
    event.preventDefault();
    let currentPage = template.data.currentPage.get();

    if (currentPage > 1) {
      currentPage = currentPage - 1
    }

    template.data.currentPage.set(currentPage);

  },

  'click .brd-next': function (event, template) {
    event.preventDefault();
    let currentPage = template.data.currentPage.get();
    const pages = template.data.pages.get();

    if (currentPage < pages[pages.length - 1].value) {
      currentPage = parseInt(currentPage) + 1
    }

    template.data.currentPage.set(currentPage);
  },

  'click .brd-page': function (event, template) {
    event.preventDefault();
    template.data.currentPage.set(this.value);

    template.data.refreshToken.set(Random.id());
  }
});


