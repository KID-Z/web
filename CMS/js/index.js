function init() {
   location.hash = 'student-list';
   btnEvent();
}
init();
var page = 1;
var size = 10;
var cont = 1;
var studentAll = [];

function btnEvent() {
   $('.header-top .btn').click(function () {
      $('.header-top .list').slideToggle();
   })
   $(window).resize(function () {
      if (window.innerWidth >= 768) {
         $('.header-top .list').slideUp(0);
      }
   })
   $(window).on('hashchange', function () {
      var hash = location.hash;
      $('.right-content .show-item').removeClass('show-item');
      $(hash).addClass('show-item');
      $('.left-menu .active').removeClass('active');
      $('.' + hash.slice(1)).addClass('active');
   })
   $('.list-item').click(function () {
      $('.header-top .list').slideUp();
      var id = $(this).attr('data-id')
      location.hash = id;
   })
   $('#tbody').on('click', '.redact-form', function () {
      $('#modal').slideToggle();
      var index = $(this).parents('tr').index();
      formFill(studentAll[index]);
   })
   $('#tbody').on('click', '.remove-form', function () {
      var index = $(this).parents('tr').index();
      packagingAjax('/api/student/delBySno', {
         sNo: studentAll[index].sNo
      }, function (data) {
         alert(data.msg);
         getAllstudentInfo();
      })

   })


   $('#btn-edit-form').on('click', 'button', function (e) {
      e.preventDefault();
      var formData = $('#edit-form').serializeArray();
      var data = getFormInfo(formData);
      packagingAjax('/api/student/updateStudent', data.data, function (data) {
         getAllstudentInfo();
      })
   })

   $('#btn-edit-form button').click(function () {
      $('#modal').slideUp();
   })
   $('#modal').click(function (e) {
      if (e.target === this) {
         $('#modal').slideUp();
      }
   })
   $('#btn-add-student button').click(function (e) {
      e.preventDefault();
      var formData = $('#form-add-student').serializeArray();
      var data = getFormInfo(formData);
      if (data.status === 'success') {
         packagingAjax('/api/student/addStudent', data.data, function (data) {
            alert(data.msg);
            $('#form-add-student')[0].reset();
            location.hash = 'student-list';
            getAllstudentInfo();
         })
      } else {
         alert(data.msg)
      }
   })
}

function formFill(data) {
   var formData = $('#edit-form')[0];
   for (var prop in data) {
      if (formData[prop]) {
         formData[prop].value = data[prop];
      }
   }

}

function getAllstudentInfo() {
   packagingAjax('/api/student/findByPage', {
      page: page,
      size: size
   }, function (res) {
      studentAll = res.data.findByPage;
      rendeTable(studentAll);
      cont = Math.ceil(res.cont / size);
   })
}
getAllstudentInfo();

function rendeTable(data) {
   var str = '';
   data.forEach(function (item, index) {
      str += `<tr>
      <td>${item.sNo}</td>
        <td>${item.name}</td>
        <td>${item.sex===0?'男':'女'}</td>
        <td>${item.email}</td>
        <td>${item.birth}</td>
        <td>${item.phone}</td>
        <td>${item.address}</td>
     <td>
        <button id="redact-form" class='redact-form'>编辑</button>
        <button id="remove-form" class='remove-form'>删除</button>
     </td>
  </tr>`
   })
   $('#tbody').html(str)
}

function packagingAjax(url, data, callback) {
   $.ajax({
      url: 'http://open.duyiedu.com' + url,
      type: 'get',
      data: $.extend({
         appkey: 'zhuchunyu_1591064522934'
      }, data),
      dataType: 'json',
      success: function (res) {
         if (res.status === 'success') {
            callback(res)
         } else {
            alert(res.msg)
         }
      }
   })
}


function getFormInfo(data) {
   var result = {
      status: "success",
      msg: "查询成功",
      data: {}
   }
   for (var i = 0; i < data.length; i++) {
      if (!data[i].value) {
         result.status = 'fail';
         result.msg = '查询失败';
         result.data = {};
         break;
      }
      if (data[i].name === 'sNo' && !/^\d{4,16}$/.test(data[i].value)) {
         result.status = "fail";
         result.msg = "学号格式不正确";
         result.data = [];
         break;
      } else if (data[i].name === 'phone' && !/^1\d{10}$/.test(data[i].value)) {
         result.status = "fail";
         result.msg = "手机号格式不正确";
         result.data = [];
         break;
      } else if (data[i].name === 'birth' && (data[i].value < 1920 || data[i].value >= 2020)) {
         result.status = "fail";
         result.msg = "出生日期应该是1920-2020年之间";
         result.data = [];
         break;
      }
      result.data[data[i].name] = data[i].value;
   }
   return result;
}