import { Template } from 'meteor/templating';
import './index.html';
import Swal from 'sweetalert2';

Template.pageSettingsFiles.onCreated(function () {
  this.data.files = new ReactiveVar([]);
  this.data.file = new ReactiveVar();
  this.data.notFound = new ReactiveVar(false);
  this.data.refreshToken = new ReactiveVar();

  this.data.currentPage = new ReactiveVar(1);
  this.data.totalDocs = new ReactiveVar();
  this.data.pageItems = new ReactiveVar(15);
  this.data.keyword = new ReactiveVar();

  BreadcrumbUtil.set('/settings/files', 'Dosyalar');
  BreadcrumbUtil.add('/settings/files', 'Dosya Ekle');
});

Template.pageSettingsFiles.onRendered(function () {
  const self = this;

  this.autorun(function () {
    Loading.show();

    self.data.refreshToken.get();
    const currentPage = self.data.currentPage.get();
    const pageItems = self.data.pageItems.get();
    const keyword = self.data.keyword.get() || '';

    const obj = {
      taxonomy_id: 1,
      pagination: {
        per_page: pageItems,
        page: currentPage,
      },

      queryParams: [{ key: 'q', value: keyword }]
    };

    ZigoApi.files.list(obj, function (_error, _result) {
      Loading.hide();

      if (_error) {
        ZigoUi.errorHandler(_error);
        return;
      }

      self.data.notFound.set(_result.data.length === 0);
      self.data.files.set(_result.data);
      self.data.totalDocs.set(_result.totalDocs);
      self.data.currentPage.set(parseInt(_result.currentPage));
    });
  });
});

Template.pageSettingsFiles.events({
  'change #brdKeyword': function (event, template) {
    event.preventDefault();
    const brdKeyword = event.target.value
    template.data.keyword.set(brdKeyword)
  },
  'submit #brdImageInsert': (event, template) => {
    event.preventDefault();
    const files = event.target.brdFile.files;

    if (files.length == 0) {
      return;
    }

    Loading.show();
    const obj = {
      multiPart: {
        files: files,
        key: 'file'
      }
    };

    ZigoApi.files.upload(obj, function (_error, _result) {
      Loading.hide();

      if (_error) {
        ZigoUi.errorHandler(_error);
        return;
      }

      template.data.refreshToken.set(Random.id());

      Swal.fire({
        title: 'Kayıt eklendi',
        icon: 'success',
        confirmButtonText: 'Tamam'
      });

      $('#brdFile').val('');
    });
  },
  'click .brd-delete': function (event, template) {
    event.preventDefault();

    const file = this;

    if (!file) {
      return;
    }

    Swal.fire({
      title: 'Emin misin?',
      text: "Bu işlemi geri alamazsın!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--danger)',
      cancelButtonColor: 'var(--dark)',
      confirmButtonText: 'Evet kaydı sil!',
      cancelButtonText: 'Vazgeç'
    }).then((result) => {
      if (result.value) {

        Loading.show();
        ZigoApi.files.delete({ file_id: file._id }, function (_error, _result) {
          Loading.hide();

          if (_error) {
            ZigoUi.errorHandler(_error);
            return;
          }

          Swal.fire({
            title: 'Başarı ile silindi',
            icon: 'success',
            confirmButtonText: 'Tamam'
          });

          template.data.refreshToken.set(Random.id());
        });
      }
    });
  },
  'click .brd-detail': function (event, template) {
    event.preventDefault();

    template.data.file.set(this)

    console.log(this);
    $('#brdFileDetailModal').modal('show');
  }
});